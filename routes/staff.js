var express = require("express");
var router = express.Router();

const {getAllStaffService, getStaffDetailService, createStaffService, updateStaffService, deleteStaffsService} = require("../service/staffService");


router.get("/", async function (req, res, next){
    await getAllStaffService();
})

router.get("/:id", async function(req, res, next){
    await getStaffDetailService(req.params.id);
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
