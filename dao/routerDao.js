var routerModel = require("./model/routerModel");

module.exports.routerDao = async function(identity){
    if(identity === 1){
        return await routerModel.findAll();
    }else{
        return await routerModel.findAll({
            where: {
                identity
            }
        })
    }
}

