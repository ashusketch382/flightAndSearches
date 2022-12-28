const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');

// const db = require("./models/index");
const {City, Airport} = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();//creating the express object

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`server started on port ${PORT}`);
        console.log(PORT);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({ alter: true });
        // }
        const city = await City.findOne({
            where: {
                id: 1
            }
        });
        const newAirport = await Airport.create({
            name: "Jindal Vijaynagar Airport",
            cityId: 2
        });
        await city.addAirport(newAirport);

        console.log(city);
        const airports = await city.getAirports();
        console.log(airports);
    })
}
setupAndStartServer();