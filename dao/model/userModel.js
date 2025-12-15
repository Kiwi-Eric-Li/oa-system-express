const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnect");

// define data model
module.exports = sequelize.define("users", {
    accountName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bankNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    department: {
        type: DataTypes.STRING,
        allowNull: true
    },
    education: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    graduatedSchool: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hometown: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    identity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    level: {
        type: DataTypes.STRING,
        allowNull: true
    },
    marriage: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    onboardingTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true
})



