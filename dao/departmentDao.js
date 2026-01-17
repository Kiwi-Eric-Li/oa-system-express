const { Op } = require('sequelize');

var departmentModel = require("./model/departmentModel");

module.exports.getAllDepartmentsDao = async function(){
    return await departmentModel.findAll();
}

module.exports.getDepartmentListDao = async function(content = '', page = 1, pageSize = 5){
    const whereCondition = {}

    // 如果传了部门名（非空字符串），才加查询条件
    if (content && content.trim() !== '') {
        whereCondition.dptName = {
            [Op.like]: `%${content}%`
        }
    }

    const result = await departmentModel.findAndCountAll({
        where: whereCondition,
        order: [['createdAt', 'DESC']],
        limit: Number(pageSize),
        offset: (Number(page) - 1) * Number(pageSize)
    })

    return {
        list: result.rows,
        total: result.count,
        page: Number(page),
        pageSize: Number(pageSize)
    }

}


module.exports.createDepartmentDao = async function(departmentInfo){
    const dept = await departmentModel.create({
        "dptName": departmentInfo.dptName,
        "parentId": departmentInfo.parentId,
        "remark": departmentInfo.remark,
        "deptLeader": departmentInfo.deptLeader
    });
    return dept;
}

module.exports.updateDepartmentDao = async function(id, type, updateVal, isDelete){
    if(isDelete){
        const result = await departmentModel.update(
            { parentId: null },
            { where: { id } }
        );
        return result;
    }else{
        const result = await departmentModel.update(
            { [type]: updateVal },
            { where: { id } }
        );
        return result;
    }
    
}

module.exports.getDepartmentDetailDao = async function(departmentId){
    const dept = await departmentModel.findOne({
        where: { id: parseInt(departmentId) },
        include: [
            {
                model: departmentModel,
                as: 'parentDept',
                attributes: ['id', 'dptName']
            }
        ]
    });
    return dept;
}
