const { Flight } = require('../models/index');
const { Op } = require("sequelize");

class FlightRepository {
    #createFilter(data){
        let filter = {};
        let priceFilter = [];
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice){
            priceFilter.push({price: {[Op.gte]: data.minPrice} });
        }
        if(data.maxPrice){
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter, { [Op.and]: priceFilter });
        console.log(filter);
        return filter;
    }
    async createFlight (data){
        try {
            const newFlight = await Flight.create(data);
            return newFlight;
        } catch (error) {
            console.log("something went wrong repository layer");
            throw(error);
        }
    }

    async getAllFlights (data) {
        try {
            const filterObject = this.#createFilter(data);
            const flights = await Flight.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }

    async getFlight (flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }

    async updateFlights (flightId, data){
        try {
            const flight = await Flight.findByPk(flightId);
            flight.totalSeats = data.totalSeats;
            flight.save();
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }
}

module.exports = FlightRepository;