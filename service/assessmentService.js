const {getAssessmentListByIdDao} = require('../dao/assessmentDao')

module.exports.getAssessmentListByUserIdService = async function(staffId){
    const result = await getAssessmentListByIdDao(staffId);
    if(result.length > 0){
        return {
            count: result.length,
            data: result
        }
    }else{
        return {
            count: 0,
            data: []
        }
    }
}


