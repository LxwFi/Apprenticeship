const express = require('express');
const web = express();
const port = 3000;
web.use(express.urlencoded({ extended: true }));
web.use(express.json());

const users = {};
let userid = 0;

web.post("/users", (req, res) => { 
    const {name, age} = req.body;
    if (/\d/.test(req.body.name) == true|| isNaN(req.body.age)){
        res.sendStatus(400);
    }  else if (req.body.age < 1 || req.body.age > 120){
        res.sendStatus(400);
    } else if (req.body.name.length < 1 || req.body.name.length > 16) {
        res.sendStatus(400);
    } else {
        userid++;
        users[userid] = {name, age};
    }
    console.log(users);
});

web.get("/users/:id", (req, res) => {
    const uid = req.params.id;
    let lookup = users[uid];
    if (lookup) {
        res.json(lookup);
        return;
    } else {
        res.sendStatus(404);
        return;
    }

});
web.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

