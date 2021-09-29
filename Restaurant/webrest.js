const express = require('express');
const Company = require('./company');
const Location = require('./location');
const Menu = require("./menu");
const sandbox = require('./sandbox');
const web = express();
web.use(express.urlencoded({ extended: true }));
web.use(express.json());
const port = 3000;


web.get("/sandbox", async (req, res) => {
    await sandbox();
});

web.get("/companies/:id", async (req, res) => {
    const company = await Company.findByPk(req.params.id);
    if (!company) {
        return res.sendStatus(400);
    }
    await company.update(req.body);
    res.sendStatus(200);
});

web.get("/location", async (req, res) => {
    const loc = await Location.findAll();
    res.json(loc);
});

web.get("/companies", async (req, res) => {
    const companies = await Company.findAll();
    res.json(companies);
});

web.get("/menu", (req, res) => {
    const menu = await Menu.findAll();
    res.json(menu);
});

web.delete("/companies/:id", (req, res) => {
 const company = await Company.findByPk(req.params.id);
 if (!company) {
     return res.sendStatus(400);
 }
});

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




web.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});