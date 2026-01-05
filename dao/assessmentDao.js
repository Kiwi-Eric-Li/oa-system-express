var assessmentModel = require("./model/assessmentModel");
var userModel = require("./model/userModel");
var levelModel = require("./model/levelModel");

module.exports.getAssessmentListByIdDao = async function(staff_id, page, page_size){
    
    const result = await assessmentModel.findAndCountAll({
      where: { "userId": staff_id },
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
      order: [['createdAt', 'DESC']],
      limit: page_size,
      offset: (page - 1) * page_size
    });
    return result;
}


