const express = require("express");

const {PORT} = require("./config/serverConfig");

const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
    const app = express();//creating the express object

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
        console.log(PORT);
    })
}
setupAndStartServer();