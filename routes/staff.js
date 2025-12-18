var express = require("express");
var router = express.Router();

const {getAllStaffService, getStaffDetailService, createStaffService, updateStaffService, deleteStaffsService} = require("../service/staffService");
const { formatResponse } = require("../utils/tools");


router.get("/", async function (req, res, next){
    let userObj = await getAllStaffService(req.query);
    res.send(formatResponse(0, "", userObj));
})

router.get("/:id", async function(req, res, next){
    let staff = await getStaffDetailService(req.params.id);
    res.send(formatResponse(0, "", staff));
})

router.post("/", async function(req, res, next){
    await createStaffService(req.body);
})

router.put("/", async function(req, res, next){
    await updateStaffService(req.body.staffId, req.body.staff);
})

router.post("/", async function(req, res, next){
    await deleteStaffsService(req.body.ids);
})


module.exports = router
