var express = require("express");
var router = express.Router();

router.post("/all", async function(req, res, next){
    console.log("======assessment=====all========", req.body);
});



module.exports = router;


