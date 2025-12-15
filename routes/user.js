var express = require("express");
var router = express.Router();

router.post("/login", async function(req, res, next){
    console.log(req.body);
    res.send("logined");
})

module.exports = router;