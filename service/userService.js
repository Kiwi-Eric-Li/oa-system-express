const md5 = require("md5");
const jwt = require("jsonwebtoken");
const QiNiu = require("qiniu");

const {loginDao} = require("../dao/userDao");

module.exports.loginService = async function(loginInfo){
    if(loginInfo.type === 1){
        loginInfo.loginPwd = md5(loginInfo.loginPwd);
    }
    const loginResult = await loginDao(loginInfo);
    if(loginResult !== null){
        // construct returned data
        const data = {
            "id": loginResult.dataValues.id,
            "userName": loginResult.dataValues.userName,
            "avatar": loginResult.dataValues.avatar,
            "accountName": loginResult.dataValues.accountName,
            "identity": loginResult.dataValues.identity
        }
        // generate token
        const token = jwt.sign(data, md5(process.env.JWT_SECRET), {
            expiresIn: 60 * 60 * 24 * 1
        });
        return {data, token};
    }else{
        return {data: null}
    }
}

module.exports.getUploadTokenService = async function(bucket, uploadUrl, accessKey, secretKey){
    const mac = new QiNiu.auth.digest.Mac(accessKey, secretKey);
    const config = new QiNiu.conf.Config();
    config.zone = QiNiu.zone.Zone_z0;

    const options = {
      scope: bucket,
      expires: 3600 * 24 * 366, //- 七牛token的过期时间为一年
      // returnBody: `{"url":"https://${uploadUrl}.hyfarsight.com/$(key)","code":0}`, //- 当七牛上传成功之后 你的返回值
      returnBody: `{"url":"${uploadUrl}/$(key)","code":0}`, //- 当七牛上传成功之后 你的返回值
      callbackBodyType: 'application/json'
    };
    const putPolicy = new QiNiu.rs.PutPolicy(options);
    return { msg: '', data: putPolicy.uploadToken(mac) }
}
