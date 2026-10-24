const express = require('express');
const router = express.Router();
const ctrlAirports = require('../controllers/airports');
const ctrlFlights = require('../controllers/flights');


//airports
router
    .route('/airports')
    .get(ctrlAirports.airportsListByDistance)
    .post(ctrlAirports.airportsCreate);

router
    .route('/airports/:airportid')
    .get(ctrlAirports.airportsReadOne)
    .put(ctrlAirports.airportsUpdateOne)
    .delete(ctrlAirports.airportsDeleteOne);

//flights
router
    .route('/airports/:airportid/flights')
    .post(ctrlFlights.flightsCreate);

router
    .route('/airports/:airportid/flights/:flightid')
    .get(ctrlFlights.flightsReadOne)
    .put(ctrlFlights.flightsUpdateOne)
    .delete(ctrlFlights.flightsDeleteOne);


module.exports = router;