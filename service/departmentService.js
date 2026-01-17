const {getAllDepartmentsDao, getDepartmentListDao, createDepartmentDao, updateDepartmentDao, getDepartmentDetailDao} = require("../dao/departmentDao");
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

module.exports.getDepartmentListService = async function(content, page, pageSize){
    const result = await getDepartmentListDao(content, page, pageSize);
    return result;
}


module.exports.createDepartmentService = async function(departmentInfo){
    const result = await createDepartmentDao(departmentInfo);
    return result;
}

module.exports.updateDepartmentService = async function(id, type, updateVal, isDelete){
    const result = await updateDepartmentDao(id, type, updateVal, isDelete);
    return result;
}

module.exports.getDepartmentDetailService = async function(departmentId){
    const result = await getDepartmentDetailDao(departmentId);
    return result;
}
