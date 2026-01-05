var express = require("express");
var router = express.Router();

const {getAssessmentListByUserIdService} = require("../service/assessmentService");
const {formatResponse} = require("../utils/tools");

router.post("/all", async function(req, res, next){
    const {staff_id, page, page_size} = req.body;
    const result = await getAssessmentListByUserIdService(staff_id, page, page_size);
    res.send(formatResponse(0, "", result));
});


module.exports = router;


