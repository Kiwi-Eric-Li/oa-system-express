const {Op} = require("sequelize");

var levelModel = require("./model/levelModel");

module.exports.getLevelListDao = async function(params){
    let {page, page_size, levelName, levelDes} = params;
    page = Number(page);
    page_size = Number(page_size);
    let offset = (page - 1) * page_size;

    const where = {};
    if(levelName){
        where.levelName = {
            [Op.like]: `%${levelName}%`
        }
    }
    if(levelDes){
        where.levelDescription = {
            [Op.like]: `%${levelDes}%`
        }
    }

    const result = await levelModel.findAndCountAll({
        where,
        limit: page_size,
        offset,
        order: [['createdAt', 'DESC']]
    });
    return result;
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






