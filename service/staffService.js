

const {getAllStaffDao, getStaffDetailDao, createStaffDao, updateStaffDao, deleteStaffsDao} = require("../dao/staffDao");

module.exports.getAllStaffService = async function(params){
    const result = await getAllStaffDao(params);
    if(result.rows.length > 0){
        return {
            count: result.count,
            data: result.rows
        };
    }else{
        return {
            count: 0,
            data: []
        }
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


