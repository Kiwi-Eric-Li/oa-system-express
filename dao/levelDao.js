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

module.exports.getAllLevelListDao = async function(content='', page=1, page_size=5){
    const whereCondition = {}
    
    // 如果传了部门名（非空字符串），才加查询条件
    if (content && content.trim() !== '') {
        whereCondition.levelName = content.trim()
    }

    const result = await levelModel.findAndCountAll({
        where: whereCondition,
        order: [['createdAt', 'DESC']],
        limit: Number(page_size),
        offset: (Number(page) - 1) * Number(page_size)
    })

    return {
        list: result.rows,
        total: result.count,
        page: Number(page),
        pageSize: Number(page_size)
    }
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






