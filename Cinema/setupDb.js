const Cinema = require("./cinema");
const Movie = require("./movies");
const db = require("./db");
const Screening = require("./screening");

async function setupDb() {
    Cinema.hasMany(Screening, Movie);
    Movie.belongsTo(Cinema);
    Movie.hasMany(Screening);
    Screening.belongsTo(Cinema, Movie);
    await db.sync();
}

module.exports = setupDb;