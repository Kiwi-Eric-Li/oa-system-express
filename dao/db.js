const md5 = require("md5");

const sequelize = require("./dbConnect");
const userModel = require("./model/userModel");
const routerModel = require("./model/routerModel");
const departmentModel = require("./model/departmentModel");

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

    let departmentCount = await departmentModel.count();
    if(!departmentCount){
        await departmentModel.bulkCreate([
            {
                "dptName": "商品部",
                "remark": "商品部简介",
                "deptLeader": 1
            },
            {
                "dptName": "大数据商品部",
                "remark": "大数据商品部简介",
                "deptLeader": 1
            },
            {
                "dptName": "新研发部",
                "remark": "新研发部简介",
                "deptLeader": 1
            },
            {
                "dptName": "销售研发部",
                "remark": "销售研发部简介",
                "deptLeader": 1
            },
            {
                "dptName": "技术部",
                "remark": "技术部简介",
                "deptLeader": 1
            },
            {
                "dptName": "研发部",
                "remark": "研发部简介",
                "deptLeader": 1
            },
            {
                "dptName": "测试部门1",
                "remark": "测试部门1简介",
                "parentId": 1,
                "deptLeader": 2
            },
            {
                "dptName": "测试部门2",
                "remark": "测试部门2简介",
                "parentId": 1,
                "deptLeader": 3
            },
            {
                "dptName": "测试部",
                "remark": "测试部简介",
                "parentId": 1,
                "deptLeader": 4
            }
        ]);
        console.log("The department table has been initialized ...");
    }

    console.log("The database has been initialized ...");
})();
