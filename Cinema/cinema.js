const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Cinema extends Model {}

Cinema.init(
    {
        location: DataTypes.STRING,
        seats: DataTypes.INTEGER,
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = Cinema;