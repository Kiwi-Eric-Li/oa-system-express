var express = require("express");
var router = express.Router();

const {getAllDepartmentsService, getDepartmentListService, createDepartmentService, updateDepartmentService, getDepartmentDetailService} = require("../service/departmentService")
const {formatResponse} = require("../utils/tools")

router.get("/", async function(req, res, next){
    const result = await getAllDepartmentsService();
    res.send(formatResponse(0, "", result));
})

router.post("/list", async function(req, res, next){
    const { content, page, page_size } = req.body;
    const result = await getDepartmentListService(content, page, page_size);
    res.send(formatResponse(0, "", result));
})

router.post("/", async function(req, res, next){
    const result = await createDepartmentService(req.body);
    res.send(formatResponse(0, "", result));
})

router.put("/:id", async function(req, res, next){
    const result = await updateDepartmentService(req.params.id, req.body.type, req.body.updateVal, req.body.isDelete);
    res.send(formatResponse(0, "", result));
})

router.get("/:id", async function(req, res, next){
    const department = await getDepartmentDetailService(req.params.id);
    res.send(formatResponse(0, "", department));
})

module.exports = router;