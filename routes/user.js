var express = require("express");
var router = express.Router();

var {loginService} = require("../service/userService");
const {formatResponse} = require("../utils/tools");

router.post("/login", async function(req, res, next){
    // first, validate captcha
    if(req.body.type === 2){
        if(req.session.captcha != req.body.captcha){
            res.send(formatResponse(1, "验证码错误", ""));
            return;
        }
    }
    const result = await loginService(req.body);
    if(result.data !== null){
        res.setHeader("authentication", result.token);
    }
    res.send(formatResponse(0, "", result.data));
})



module.exports = router;