

const {getAllStaffDao, getStaffDetailDao, createStaffDao, updateStaffDao, deleteStaffsDao} = require("../dao/staffDao");

module.exports.getAllStaffService = async function(params){
    const result = await getAllStaffDao(params);
    if(result.length > 0){
        return result;
    }else{
        return []
    }
}

module.exports.getStaffDetailService = async function(id){
    return await getStaffDetailDao(id);
}

module.exports.createStaffService = async function(staffInfo){
    await createStaffDao(staffInfo);
}

module.exports.updateStaffService = async function(id, staffInfo){
    await updateStaffDao(id, staffInfo);
}

module.exports.deleteStaffsService = async function(ids){
    await deleteStaffsDao(ids);
}


