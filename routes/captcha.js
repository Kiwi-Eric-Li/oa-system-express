var express = require("express");
var router = express.Router();

const {getCaptchaService} = require("../service/captchaService");
const {formatResponse} = require("../utils/tools");

router.post("/", async function(req, res, next){
    let code = await getCaptchaService(req.body);
    req.session.captcha = code;
    res.send(formatResponse(0, "", code));
})


module.exports = router;

