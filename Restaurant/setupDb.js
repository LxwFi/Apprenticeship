const Company = require("./company");
const Location = require("./location");
const db = require("./db");
const Menu = require("./menu");

async function setupDb() {
    Company.hasMany(Location);
    Location.belongsTo(Company);
    Company.hasMany(Menu);
    Menu.belongsTo(Company);
    await db.sync();
}

module.exports = setupDb;