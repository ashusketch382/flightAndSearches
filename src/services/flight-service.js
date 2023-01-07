const { FlightRepository, AirplaneRepository } = require("../repositories/index");
const compareTime = require("../utils/helper");

class FlightService {
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneReository = new AirplaneRepository();

    }
    async createFlight (data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "arrival time can't be less than departure time"};
            }
            const airplane =await this.airplaneReository.getAirplane(data.airplaneId);
            const flight = this.flightRepository.createFlight( {
                ...data, totalSeats:airplane.capacity
            } );
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
    async getAllFlightData (data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    }
}

module.exports = FlightService;