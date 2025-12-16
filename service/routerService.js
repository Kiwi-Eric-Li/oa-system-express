
var {routerDao} = require("../dao/routerDao");

module.exports.routerService = async function(identity){
    const routerList = await routerDao(identity);
    if(routerList.length > 0){
        let result = [];
        routerList.forEach(item => {
            const {dataValues} = item;
            result.push({
                "id": dataValues.id,
                "icon": dataValues.icon,
                "identity": dataValues.identity,
                "route": dataValues.route,
                "zhName": dataValues.zhName
            });
        });
        return result;
    }else{
        return [];
    }
}