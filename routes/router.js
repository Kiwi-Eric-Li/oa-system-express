var express = require("express");
var router = express.Router();

var {routerService} = require("../service/routerService");
var {analysisToken, formatResponse} = require("../utils/tools");

router.get("/", async function(req, res, next){

    // according to jwt, parse pwt and get current user's identity
    let token = analysisToken(req.get("Authorization"));
    console.log("token=", token);
    if(token != null){
        const result = await routerService(token.identity);
        res.send(formatResponse(0, "", result));
    }else{
        res.send(formatResponse(1, "token解析错误", null));
    }
});


module.exports = router;

