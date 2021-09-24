const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Screening extends Model {}

Screening.init(
    {
        cinema_id: DataTypes.INTEGER,
        movie_id: DataTypes.INTEGER,
        start: DataTypes.INTEGER,
        screen: DataTypes.INTEGER,
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = Screening;