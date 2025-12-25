const {getLevelListDao, createLevelDao, updateLevelDao, deleteLevelDao, getLevelByIdDao} = require("../dao/levelDao");



module.exports.getLevelListService = async function(params){
    const result = await getLevelListDao(params);
    if(result.rows.length){
        return {
            count: result.count,
            data: result.rows
        }
    }else{
        return {
            count: 0,
            data: []
        }
    }
}


module.exports.getLevelByIdService = async function(id){
    const result = await getLevelByIdDao(id);
    return result;
}

module.exports.deleteLevelService = async function(id){
    const result = await deleteLevelDao(id);
    return result;
}




