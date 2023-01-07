const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
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
        const response = flightService.getAllFlightData(req.body);
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