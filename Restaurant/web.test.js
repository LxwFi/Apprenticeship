const Company = require('./company');
const Location = require('./location');
const Menu = require("./menu");
const setup = require("./setupDb");




test("Company name check", async () => {
    await setup();
    const mcd = await Company.create({
        name: "McDonald",
        logourl: "www.site.com",
    });

    expect(mcd.name).toEqual("McDonald");

});
test("Company URL check", async () => {
    await setup();
    const mcd = await Company.create({
        name: "McDonald",
        logourl: "www.site.com",
    });


    expect(mcd.logourl).toEqual("www.site.com");

});
test("Location name check", async () => {
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
    expect(london.name).toBe("London");
});
test("Location capacity check", async () => {
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
    expect(london.capacity).toBe(120);
});
test("Location manager check", async () => {
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
    expect(london.manager).toBe("Bobson");
});
test("Location manager check", async () => {
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
    const drinks = await mcd.createMenu({
        title: "Drinks",
    })
    expect(drinks.title).toBe("Drinks");
});