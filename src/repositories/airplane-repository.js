const { Airplane } = require("../models/index");

class AirplaneRepository {
    async getAirplane (planeId) {
        const airplane = await Airplane.findByPk(planeId);
        return airplane;
    }
}

module.exports = AirplaneRepository;