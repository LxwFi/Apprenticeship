const express = require('express');
const Company = require('./company');
const Location = require('./location');
const Menu = require("./menu");
const sandbox = require('./sandbox');
const web = express();
const path = require("path");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
});
const setup = require("./setupDb");


web.engine("handlebars", handlebars);
web.set("view engine", "handlebars");
web.set('views', path.join(__dirname, 'views'));
web.use(express.urlencoded({ extended: true }));
web.use(express.json());
web.use(express.static('public'));

const port = 3000;

//creates sandbox database
web.get("/sandbox", async (req, res) => {
    await sandbox();
});

//test for handlebars
web.get("/aa", async (req, res) => {
    const company = await Company.findAll();
    res.render("home", { company });
    console.log(company);

});

//searches for company by id
web.get("/companies/:id", async (req, res) => {
    const company = await Company.findByPk(req.params.id);
    if (!company) {
        return res.sendStatus(400);
    }
    await company.update(req.body);
    res.sendStatus(200);
});

//searches for meny by id
web.get("/menus/:id", async(req, res) =>{
    const menu = await Menu.findByPk(req.params.id);
    if (!menu) {
        return res.sendStatus(400);
    }
    await menu.update(req.body);
    res.sendStatus(200);
});

//gets all locations
web.get("/locations", async (req, res) => {
    const loc = await Location.findAll();
    res.json(loc);
});

//gets all companies
web.get("/companies", async (req, res) => {
    const companies = await Company.findAll();
    res.json(companies);
});

//gets all menus
web.get("/menus", async(req, res) => {
    const menu = await Menu.findAll();
    res.json(menu);
});

//creates a new company using json body
web.post("/companies", async (req, res) => {
    const { name, logourl } = req.body;
    if (name && logourl) {
        await Company.create({
            name, logourl
        });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

//deletes a company with specified id
web.delete("/companies/:id", async(req, res) => {
    const company = await Company.findByPk(req.params.id);
    if (!company) {
        return res.sendStatus(400);
    }
    await company.destroy();
    res.sendStatus(200);
});

//creates a new menu using json body
web.post("/menus", async (req, res) => {
    const { title } = req.body;
    if (title) {
        await Menu.create({
            title
        });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

//deletes a menu with specified id
web.delete("/menus/:id", async(req, res) => {
    const menu = await Menu.findByPk(req.params.id);
    if (!menu) {
        return res.sendStatus(400);
    }
    await menu.destroy();
    res.sendStatus(200);
});

//creates a new location using json body
web.post("/locations", async (req, res) => {
    const { name, capacity, manager } = req.body;
    if (name && capacity && manager) {
        await Location.create({
            name, capacity, manager
        });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

//deletes a location with specified id
web.delete("/locations/:id", async(req, res) => {
    const loc = await Location.findByPk(req.params.id);
    if (!loc) {
        return res.sendStatus(400);
    }
    await loc.destroy();
    res.sendStatus(200);
});

web.get("/companydetails/:id", async (req, res) => {
    const company = await Company.findByPk(req.params.id, {
        include: Location,
    });
    if (!company) {
        return res.sendStatus(404);
    }   console.log(company);
    res.render("location", { company });
});

 
web.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

setup();