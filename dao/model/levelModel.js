const {DataTypes} = require('sequelize');
const sequelize = require("../dbConnect")

module.exports = sequelize.define("levels", {
    assessmentRequire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    baseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    interviewRequire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelScore: {
        type: DataTypes.DECIMAL(5,1),
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true
})


