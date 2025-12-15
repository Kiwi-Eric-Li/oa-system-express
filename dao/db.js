const md5 = require("md5");

const sequelize = require("./dbConnect");
const userModel = require("./model/userModel");

// initialize data
(async function(){

    // synchronize the data model with the table
    await sequelize.sync({
        alter: true
    });

    let userCount = await userModel.count();
    if(!userCount){
        await userModel.create({
            "accountName": "admin",
            "loginPwd": md5("123456"),
            "mobile": "15101596939",
            "userName": "Eric"
        });
        console.log("The user table has been initialized ...")
    }

    console.log("The database has been initialized ...");
})();
