var express = require("express");
var router = express.Router();

var {loginService} = require("../service/userService");
const {formatResponse} = require("../utils/tools");

router.post("/login", async function(req, res, next){
    const result = await loginService(req.body);
    if(result.data !== null){
        res.setHeader("authentication", result.token);
    }
    res.send(formatResponse(0, "", result.data));
})

module.exports = router;