const {DataTypes} = require("sequelize");
const sequelize = require("../dbConnect");

// define data model
module.exports = sequelize.define("routers", {
    icon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    route: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zhName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


