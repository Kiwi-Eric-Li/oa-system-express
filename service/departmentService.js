const {getAllDepartmentsDao} = require("../dao/departmentDao");
const {buildDeptTree} = require("../utils/tools");

module.exports.getAllDepartmentsService = async function(){
    const allDepartments = await getAllDepartmentsDao();
    const tree = buildDeptTree(allDepartments.map(d => d.toJSON()), null);
    const result = {
        id: -1,
        label: '公司组织架构图',
        children: tree
    };
    return result;
}


