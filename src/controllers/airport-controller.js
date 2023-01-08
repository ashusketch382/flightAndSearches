const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "successfully created the airport",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Couldn't create the airport",
            err: error
        });
    }
}

module.exports = {
    create
}