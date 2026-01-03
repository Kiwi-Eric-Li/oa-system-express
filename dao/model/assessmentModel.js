const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnect");

module.exports = sequelize.define("assessments", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    result: {
        type: DataTypes.STRING,
        allowNull: false
    },
    assessDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true
})




