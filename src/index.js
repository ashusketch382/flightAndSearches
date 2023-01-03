const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');

const db = require("./models/index");
const { Airplane } = require('./models/index');
const {City, Airport} = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();//creating the express object

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`server started on port ${PORT}`);
        console.log(PORT);
        
        const newAirplane = await Airplane.create({
            modelNumber: "Boeing 737"
        });
    })
}
setupAndStartServer();