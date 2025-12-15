const tencentcloud = require("tencentcloud-sdk-nodejs");


module.exports.getCaptchaService = async function(info){
    return new Promise(resolve => {
        const smsClient = tencentcloud.sms.v20210111.Client;
        const client = new smsClient({
            credential: {
                secretId: process.env.SMD_SERET_ID,
                secretKey: process.env.SMD_SECRET_KEY
            },
            region: process.env.SMD_REGION,
            profile: {
                signMethod: process.env.SMD_SIGN_METHOD,
                httpProfile: {
                    reqMethod: "POST",
                    reqTimeout: 30,
                    endpoint: process.env.SMD_ENDPOINT
                }
            }
        });
        const code = Math.random().toString().substring(2, 6);
        const params = {
            SmsSdkAppId: process.env.SMD_SMSSDK_APPID,
            SignName: process.env.SMD_SIGNNAME,
            ExtendCode: "",
            SenderId: "",
            SessionContext: "",
            PhoneNumberSet : [info.mobile],
            TemplateId: process.env.SMD_TEMPLATE_ID,
            TemplateParamSet: [code]
        }
        client.SendSms(params, function(err, response){
            if(err){
                console.log(err);
                return;
            }
            resolve(code);
        })
    })
}