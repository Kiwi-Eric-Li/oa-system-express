const {getLevelListDao, createLevelDao, updateLevelDao, deleteLevelDao, getLevelByIdDao} = require("../dao/levelDao");



module.exports.getLevelByIdService = async function(id){
    const result = await getLevelByIdDao(id);
    return result;
}





