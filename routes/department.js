var express = require("express");
var router = express.Router();

const {getAllDepartmentsService} = require("../service/departmentService")
const {formatResponse} = require("../utils/tools")

router.get("/", async function(req, res, next){
    const result = await getAllDepartmentsService();
    res.send(formatResponse(0, "", result));
})

module.exports = router;