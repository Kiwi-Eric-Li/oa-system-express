const {getAssessmentListByIdDao} = require('../dao/assessmentDao')

module.exports.getAssessmentListByUserIdService = async function(staff_id, page, page_size){
    const result = await getAssessmentListByIdDao(staff_id, page, page_size);
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


