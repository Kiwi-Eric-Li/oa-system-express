var assessmentModel = require("./model/assessmentModel");
var userModel = require("./model/userModel");
var levelModel = require("./model/levelModel");

module.exports.getAssessmentListByIdDao = async function(staffId){
    
    const list = await assessmentModel.findAll({
      where: { "userId": staffId },
      include: [
        {
            model: userModel,
            as: 'user',
            attributes: ["id", 'userName']
        },
        {
          model: levelModel,
          as: 'initialLevelInfo',
          attributes: ['id', 'levelName']
        },
        {
            model: levelModel,
            as: 'currentLevelInfo',
            attributes: ['id', 'levelName']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    const result = list.map(item => item.get({ plain: true }))
    
    return result;
}


