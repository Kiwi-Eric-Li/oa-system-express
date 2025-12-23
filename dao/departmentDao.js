var departmentModel = require("./model/departmentModel");

module.exports.getAllDepartmentsDao = async function(){
    return await departmentModel.findAll();
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
