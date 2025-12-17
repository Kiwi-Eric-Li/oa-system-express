var userDao = require("./model/userModel");

module.exports.getAllStaffDao = async function(params){
    let {page, page_size} = params;
    page = parseInt(page);
    page_size = parseInt(page_size);
    let offset = (page - 1) * page_size;
    let limit = page_size;
    const result = await userDao.findAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
        attributes: {
            exclude: ['loginPwd']
        }
    });
    return result;
}

module.exports.getStaffDetailDao = async function(id){
    const result = await userDao.findOne({
        where: { id },
        attributes: {
            exclude: ['loginPwd']
        },
    });
    return result;
}

module.exports.createStaffDao = async function(staffInfo){

}

module.exports.updateStaffDao = async function(id, staffInfo){

}

module.exports.deleteStaffsDao = async function(ids){

}



