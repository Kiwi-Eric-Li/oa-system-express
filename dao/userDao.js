const userModel = require("./model/userModel");

module.exports.loginDao = async function(loginInfo){
    // account + pwd 
    if(loginInfo.type === 1){
        const result = await userModel.findOne({
            where: {
                accountName: loginInfo.accountName,
                loginPwd: loginInfo.loginPwd
            }
        })
        return result;
    }else{
        // mobile + pwd
        const result = await userModel.findOne({
            where: {
                mobile: loginInfo.mobile
            }
        })
        return result;
    }
}


