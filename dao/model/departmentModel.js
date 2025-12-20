const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnect");

module.exports = sequelize.define("departments", {
    dptName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parentId: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deptLeader: {
        type: DataTypes.BIGINT,
        allowNull: true
    }
}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true
})





