const sequelize = require("./db");
const Cinema = require("./cinema");
const Movie = require("./movies");
const Screening = require("./screening");

async function sandbox() {
    await sequelize.sync();
    const odeon = await Cinema.create({
        location: "London",
        seats: 500,
    });
    const cinemax = await Cinema.create({
        location: "Bristol",
        seats: 650,
    });
    const potter = await Movie.create({
        title: "Harry Potter",
        duration: 155 + " Minutes",
    });
    const titanic = await Movie.create({
        title: "Titanic",
        duration: 170 + " Minutes",
    });
    const premiere = await Screening.create({
        cinema: odeon.id,
        movie: titanic.id,
        start: 11+":"+30,
        screen: 6
    })

};
sandbox();