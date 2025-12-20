var departmentModel = require("./model/departmentModel");

module.exports.getAllDepartmentsDao = async function(){
    return await departmentModel.findAll();
}