var levelModel = require("./model/levelModel");

module.exports.getLevelListDao = async function(params){

}

module.exports.createLevelDao = async function(levelInfo){

}

module.exports.updateLevelDao = async function(id, type, updateVal){

}

module.exports.deleteLevelDao = async function(id){
    const result = await levelModel.destroy({
        where: {id}
    });
    return result;
}

module.exports.getLevelByIdDao = async function(id){
    const levelDao = await levelModel.findOne({
        where: {id}
    });
    return levelDao;
}






