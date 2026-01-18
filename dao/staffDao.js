var userModel = require("./model/userModel");
var departmentModel = require("./model/departmentModel");
var levelModel = require("./model/levelModel");

module.exports.getAllStaffDao = async function(params){
    let {page, page_size} = params;
    page = parseInt(page);
    page_size = parseInt(page_size);

    let offset = (page - 1) * page_size;
    let limit = page_size;
    const result = await userModel.findAndCountAll({
        limit,
        offset,
        include: [
            {
                model: departmentModel,
                as: 'dept',
                attributes: ['id', 'dptName'],
                include: [
                    {
                        model: userModel,
                        as: 'leader',
                        attributes: ["id", "userName"]
                    }
                ]
            },
            {
                model: levelModel,
                as: 'levelInfo',
                attributes: ['id', 'levelName']
            }
        ],
        order: [["createdAt", "DESC"]],
        attributes: {
            exclude: ['loginPwd']
        }
    });
    return result;
}

module.exports.getStaffDetailDao = async function(id){
    const result = await userModel.findOne({
        where: { id },
        attributes: {
            exclude: ['loginPwd']
        },
        include: [
            {
                model: departmentModel,
                as: 'dept',
                attributes: ['dptName'] // 只返回部门名称
            }
        ]
    });
    return result;
}

module.exports.createStaffDao = async function(staffInfo){

}

module.exports.updateStaffDao = async function(id, staffInfo){
    const staff = await userModel.findByPk(id);

    if (!staff) {
        return staff;
    }
    await staff.update(staffInfo);
    return staff;
}

module.exports.deleteStaffsDao = async function(ids){
    const result = await userModel.destroy({
      where: {
        id: ids
      }
    });
    return result;
}

module.exports.checkIsExistDao = async function(val){
    const { accountName, mobile } = val;

    const where = accountName ? { accountName } : { mobile };
    const result = await userModel.findOne({
      where,
      attributes: ['id'],
    });
    return result;
}


