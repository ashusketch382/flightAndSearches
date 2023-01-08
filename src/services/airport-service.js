const { AirportRepository } = require("../repositories/index");
const  CrudService  = require("./crud-service");

class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }

}

module.exports = AirportService;