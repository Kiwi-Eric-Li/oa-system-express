var express = require("express");
var router = express.Router();

var {loginService, getUploadTokenService} = require("../service/userService");
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
        res.setHeader("Authorization", result.token);
    }
    res.send(formatResponse(0, "", result.data));
})

router.post("/upload/token", async function(req, res, next){
    const { bucket, uploadUrl, accessKey, secretKey } = req.body;
    const result = await getUploadTokenService(bucket, uploadUrl, accessKey, secretKey);
    res.send(formatResponse(0, "", result.data));
});


module.exports = router;