var express = require("express");
var router = express.Router();

const {getAllDepartmentsService, createDepartmentService, updateDepartmentService} = require("../service/departmentService")
const {formatResponse} = require("../utils/tools")

router.get("/", async function(req, res, next){
    const result = await getAllDepartmentsService();
    res.send(formatResponse(0, "", result));
})

router.post("/", async function(req, res, next){
    const result = await createDepartmentService(req.body);
    res.send(formatResponse(0, "", result));
})

router.put("/", async function(req, res, next){
    const result = await updateDepartmentService(req.params.id, req.body.type, req.body.updateVal);
    res.send(formatResponse(0, "", result));
})

module.exports = router;