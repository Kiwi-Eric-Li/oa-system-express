var rewardAndPunishmentModel = require("./model/rewardandpunishmentModel");
var userModel = require("./model/userModel");

module.exports.getRewardAndPunishmentListByIdDao = async function(staff_id, page, page_size){
    
    const result = await rewardAndPunishmentModel.findAndCountAll({
          where: { "userId": staff_id },
          include: [
            {
                model: userModel,
                as: 'user',
                attributes: ["id", 'userName']
            }
          ],
          order: [['createdAt', 'DESC']],
          limit: page_size,
          offset: (page - 1) * page_size
    });
    
    return result;
}



