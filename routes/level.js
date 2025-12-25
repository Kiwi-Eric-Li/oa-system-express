var express = require("express");
var router = express.Router();

const {getLevelByIdService} = require("../service/levelService");
const {formatResponse} = require("../utils/tools");


router.get("/", async function(req, res, next){

})



router.get("/:id", async function(req, res, next){
    const result = await getLevelByIdService(req.params.id);
    res.send(formatResponse(0, "", result));
})


module.exports = router;
