var assessmentModel = require("./model/assessmentModel");
var levelModel = require("./model/levelModel");

module.exports.getAssessmentListByIdDao = async function(staffId){
    
    const list = await assessmentModel.findAll({
      where: { "userId": staffId },
      include: [
        {
          model: levelModel,
          as: 'level',
          attributes: ['id', 'levelName']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    const result = list.map(item => item.get({ plain: true }))
    
    return result;
}


