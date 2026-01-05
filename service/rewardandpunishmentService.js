const {getRewardAndPunishmentListByIdDao} = require("../dao/rewardandpunishmentDao");

module.exports.getRewardAndPunishmentListByUserIdService = async function(staff_id, page, page_size){
    const result = await getRewardAndPunishmentListByIdDao(staff_id, page, page_size);
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






