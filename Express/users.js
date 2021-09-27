const express = require('express');
const web = express();
const port = 3000;
web.use(express.urlencoded({ extended: true }));
web.use(express.json());

const users = {};
let userid = 0;

web.post("/users", (req, res) => { 
    userid += 1;
    users[userid]=req.body;
    console.log(users);
});

web.post("/test", (req, res) => {
    console.log("test");
});

web.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});