var express = require("express");
var router = express.Router();

const {getLevelListService, getAllLevelListService, getLevelByIdService, deleteLevelService} = require("../service/levelService");
const {formatResponse} = require("../utils/tools");


router.get("/", async function(req, res, next){
    let levelObj = await getLevelListService(req.query);
    res.send(formatResponse(0, "", levelObj));
})

router.post("/list", async function(req, res, next){
    const { content, page, page_size } = req.body;
    console.log(content, page, page_size);
    const result = await getAllLevelListService(content, page, page_size);
    res.send(formatResponse(0, "", result));
})

router.get("/:id", async function(req, res, next){
    const result = await getLevelByIdService(req.params.id);
    res.send(formatResponse(0, "", result));
})

router.delete("/:id", async function(req, res, next){
    const result = await deleteLevelService(req.params.id);
    res.send(formatResponse(0, "", result));
})


module.exports = router;
