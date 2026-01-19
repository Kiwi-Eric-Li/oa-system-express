const {getLevelListDao, getAllLevelListDao, createLevelDao, updateLevelDao, deleteLevelDao, getLevelByIdDao} = require("../dao/levelDao");



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

module.exports.getAllLevelListService = async function(content, page, page_size){
    const result = await getAllLevelListDao(content, page, page_size);
    return result;
}


module.exports.getLevelByIdService = async function(id){
    const result = await getLevelByIdDao(id);
    return result;
}

module.exports.deleteLevelService = async function(id){
    const result = await deleteLevelDao(id);
    return result;
}




