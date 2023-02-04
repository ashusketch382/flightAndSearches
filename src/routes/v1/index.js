const express = require('express');
const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");

const { FlightMiddleware } = require("../../midllewares/index");

const router = express.Router();

router.post('/city', cityController.create);
router.post('/cities', cityController.createAll);
router.get('/city/:id', cityController.get);
router.patch('/city/:id', cityController.update);
router.delete('/city/:id', cityController.destroy);
router.get('/city', cityController.getAll);

router.post('/flights', FlightMiddleware.validateCreateFlight ,flightController.create);
router.get('/flights', flightController.getAll);
router.get('/flights/:id', flightController.getFlight);
router.patch('/flights/:id', flightController.update);

router.post('/airports', airportController.create);
module.exports = router;