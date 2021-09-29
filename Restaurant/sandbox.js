const sequelize = require("./db");
const Company = require("./company");
const Location = require("./location");
const Menu = require("./menu");
const setup = require("./setupDb");

async function sandbox() {
    await setup();
    const mcd = await Company.create({
        name: "McDonald",
        logourl: "www.site.com",
    });
    const london = await mcd.createLocation({
        name: "London",
        capacity: 120,
        manager: "Bobson",
    });
    const brighton = await mcd.createLocation({
        name: "Brighton",
        capacity: 150,
        manager: "Jackson",
    });
    const drinks = await mcd.createMenu({
        title: "Drinks",
    })
};

module.exports = sandbox;