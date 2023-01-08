const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const filterRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(filterRequestData);
        return res.status(201).json({
            data: flight,
            message: "successfully created the flight",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: "couldn't create the flight",
            success: false,
            err: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            message: "successfully fetched all cities",
            success: true,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: "couldn't get the flights",
            success: false,
            err: error
        })
    }
}
module.exports = {
    create,
    getAll
}