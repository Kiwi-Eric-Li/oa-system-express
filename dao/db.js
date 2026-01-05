const md5 = require("md5");

const sequelize = require("./dbConnect");
const userModel = require("./model/userModel");
const routerModel = require("./model/routerModel");
const departmentModel = require("./model/departmentModel");
const levelModel = require("./model/levelModel");
const assessmentModel = require("./model/assessmentModel");
const rewardandpunishmentModel = require("./model/rewardandpunishmentModel");

// initialize data
(async function(){

    departmentModel.belongsTo(departmentModel, {
        as: 'parentDept',
        foreignKey: 'parentId',
        constraints: false
    });

    userModel.belongsTo(departmentModel, {
        foreignKey: 'department',
        targetKey: 'id',
        as: 'dept'
    });

    userModel.belongsTo(levelModel, {
        foreignKey: 'level',
        targetKey: 'id',
        as: 'levelInfo'
    });

    departmentModel.belongsTo(userModel, {
        foreignKey: 'deptLeader',
        targetKey: 'id',
        as: 'leader'
    });

    userModel.hasMany(assessmentModel, {
        foreignKey: 'userId',
        as: 'assessments'
    });

    assessmentModel.belongsTo(userModel, {
        foreignKey: 'userId',
        as: 'user'
    });

    assessmentModel.belongsTo(levelModel, {
        foreignKey: 'initialLevel',
        as: 'initialLevelInfo'
    });

    assessmentModel.belongsTo(levelModel, {
        foreignKey: 'currentLevel',
        as: 'currentLevelInfo'
    });

    rewardandpunishmentModel.belongsTo(userModel, {
        foreignKey: 'userId',
        as: 'user'
    });

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

    let levelCount = await levelModel.count();
    if(!levelCount){
        await levelModel.bulkCreate([
            {
                "assessmentRequire": "1A",
                "baseNumber": 60,
                "interviewRequire": "3A",
                "levelDescription": "学徒",
                "levelName": "T1-4",
                "levelScore": 90.0
            },
            {
                "assessmentRequire": "1A",
                "baseNumber": 20,
                "interviewRequire": "2A",
                "levelDescription": "初级专员",
                "levelName": "T2-3",
                "levelScore": 60.0
            },
            {
                "assessmentRequire": "2S",
                "baseNumber": 160,
                "interviewRequire": "2S2A",
                "levelDescription": "资深专家",
                "levelName": "T6-1",
                "levelScore": 70.0
            }
        ]);
        console.log("The level table has been initialized ...")
    }

    let assessmentCount = await assessmentModel.count();
    if(!assessmentCount){
        await assessmentModel.bulkCreate([
            {
                userId: 4,
                initialLevel: 2,
                currentLevel: 2,
                levelScore: 50,
                assessScore: 50,
                result: 'B',
                assessDate: new Date()
            },
            {
                userId: 2,
                initialLevel: 3,
                currentLevel: 3,
                levelScore: 60,
                assessScore: 60,
                result: 'B+',
                assessDate: new Date()
            }
        ]);
        console.log("The assessment table has been initialized ...")
    }

    let rewardandpunishmentCount = await rewardandpunishmentModel.count();
    if(!rewardandpunishmentCount){
        await rewardandpunishmentModel.bulkCreate([
            {
                userId: 4,
                type: 1,
                reason: "表现优异",
                date: new Date()
            },
            {
                userId: 4,
                type: 2,
                reason: "奖励知识创新",
                date: new Date()
            },
            {
                userId: 4,
                type: 3,
                reason: "迟到",
                date: new Date()
            },
            {
                userId: 4,
                type: 3,
                reason: "早退",
                date: new Date()
            },
            {
                userId: 4,
                type: 4,
                reason: "搬弄是非",
                date: new Date()
            },
            {
                userId: 4,
                type: 4,
                reason: "工作失误",
                date: new Date()
            },
        ]);
        console.log("The rewardandpunishment table has been initialized ...")
    }


    console.log("The database has been initialized ...");
})();
