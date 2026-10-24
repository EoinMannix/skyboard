const express = require('express');
const router = express.Router();

const ctrlFlights = require('../controllers/flights');
const ctrlAuth = require('../controllers/auth');

/* GET Flights pages*/
router.get('/', ctrlFlights.dashboard);
router.post('/airports/new', ctrlFlights.airportCreate);

/* Account pages */
router.get('/login', ctrlAuth.login);
router.get('/register', ctrlAuth.register);

module.exports = router;