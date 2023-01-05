const { Flight } = require('../models/index');

class FlightRepository {
    async createFlight (data){
        try {
            const newFlight = await Flight.create(data);
            return newFlight;
        } catch (error) {
            console.log("something went wrong repository layer");
            throw(error);
        }
    }
}

module.exports = FlightRepository;