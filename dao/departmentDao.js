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

module.exports.updateDepartmentDao = async function(id, type, updateVal){
    const result = await departmentModel.update(
      { [type]: updateVal },
      { where: { id } }
    );
    return result;
}
