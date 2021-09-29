const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Company extends Model {}

Company.init(
    {
        name: DataTypes.STRING,
        logourl: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = Company;