const jwt = require("jsonwebtoken");
const md5 = require("md5");

module.exports.formatResponse = function (code, msg, data){
    return {
        "code": code,
        "msg": msg,
        "data": data
    }
}

module.exports.analysisToken = function(token){
    return jwt.verify(token.split(" ")[1], md5(process.env.JWT_SECRET));
}

module.exports.buildDeptTree = function(list, rootParentId = null){
    const map = new Map();
    const roots = [];

    // 1. 初始化 map
    list.forEach(item => {
        map.set(item.id, {
            id: item.id,
            label: item.dptName,
            children: []
        });
    });

    // 2. 构建父子关系
    list.forEach(item => {
        const node = map.get(item.id);
        if (item.parentId === rootParentId) {
            roots.push(node);
        } else {
            const parent = map.get(item.parentId);
            if (parent) {
                parent.children.push(node);
            }
        }
    });

    return roots;
}
