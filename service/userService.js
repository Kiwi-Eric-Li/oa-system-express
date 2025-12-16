const md5 = require("md5");
const jwt = require("jsonwebtoken");

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
