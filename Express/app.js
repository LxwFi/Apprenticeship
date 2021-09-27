const express = require('express');
const web = express();
const port = 3000;
web.use(express.static('public'));

function coin() {
    let a = "";
    a = Math.floor(Math.random()* (3 - 1) ) + 1;
    if (a == 1){
        return "Tails";
    } else if (a == 2) {
        return "Heads";
    }
}

web.get("/now", (req, res) => {
    const now = new Date();
    res.send(now);
});
web.get("/flipcoin", (req, res) => {
    let b = "";
    res.send(coin(b));
});
web.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

