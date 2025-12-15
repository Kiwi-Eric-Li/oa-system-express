const md5 = require("md5");

const sequelize = require("./dbConnect");
const userModel = require("./model/userModel");
const routerModel = require("./model/routerModel");

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

    let routerCount = await routerModel.count();
    if(!routerCount){
        await routerModel.bulkCreate([
            {
                icon: "dashboard",
                identity: 1,
                route: "/oa/dashboard",
                zhName: "员工分析"
            },
            {
                icon: "attendance",
                identity: 0,
                route: "/oa/attendance",
                zhName: "出勤统计"
            },
            {
                icon: "team",
                identity: 0,
                route: "/oa/staff",
                zhName: "员工"
            },
            {
                icon: "department",
                identity: 1,
                route: "/oa/department",
                zhName: "部门"
            },
            {
                icon: "level",
                identity: 0,
                route: "/oa/level",
                zhName: "职级"
            },
            {
                icon: "assessment",
                identity: 0,
                route: "/oa/assessment",
                zhName: "绩效考核"
            },
            {
                icon: "salary",
                identity: 0,
                route: "/oa/salary",
                zhName: "调薪记录"
            },
            {
                icon: "rewardAndPunishment",
                identity: 0,
                route: "/oa/rewardandpunishment",
                zhName: "奖惩记录"
            },
            {
                icon: "bar-chart",
                identity: 0,
                route: "/oa/attendanceinfo",
                zhName: "考勤信息"
            }
        ]);
        console.log("The router table has been initialized ...");
    }



    console.log("The database has been initialized ...");
})();
