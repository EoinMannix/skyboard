const request = require('request');

const apiOptions = {
    server : 'http://localhost:3000' 
};

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://myproject-ef1e.onrender.com';
}

const _renderDashboard = function(req, res, airport){
    res.render('dashboard',{
        title: 'SkyBoard - Live departures and arrivals',
        pageHeader: {
            title: airport.airportName,
            code: airport.airportCode,
            summary: airport.summary
        },
        departures: airport.flights.filter(flight => flight.direction === 'departure'),
        arrivals: airport.flights.filter(flight => flight.direction === 'arrival'),
        watchlist: [{
            flight: 'EI152',
            status: 'On time',
            colour: 'success' 
        },
        {
            flight: 'EI105',
            status: 'Check-in',
            colour: 'warning'
        },
        {
            flight: 'FR963',
            status: 'On time',
            colour: 'success'
        },
        {
            flight: 'QR17',
            status: 'Delayed',
            colour: 'danger'
        }]
    });
};

const dashboard = function(req, res) {
    const path = '/api/airports/6adcbff64fba4e8c9677faf9';
    const requestOptions = {
        url: apiOptions.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };
    request(requestOptions, (err, response,body) => {
        let airport = {
            airportName: '',
            airportCode: '',
            summary: '',
            flights: [] 
        };

        if (!err && response.statusCode === 200 && Array.isArray(body.flights)) {
            airport = body;
        }
        else {
            console.log('API error or no flights in body:', body);
        }
        _renderDashboard(req, res, airport);
    });
};

const airportCreate = function(req, res) {
    const path = '/api/airports';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: {
            airportName: req.body.airportName,
            airportCode: req.body.airportCode,
            summary: req.body.summary,
            flight1: req.body.flight1,
            direction1: req.body.direction1,
            place1: req.body.place1,
            time1: req.body.time1,
            gate1: req.body.gate1,
            terminal1: req.body.terminal1,
            status1: req.body.status1,
            colour1: req.body.colour1,
            flight2: req.body.flight2,
            direction2: req.body.direction2,
            place2: req.body.place2,
            time2: req.body.time2,
            gate2: req.body.gate2,
            terminal2: req.body.terminal2,
            status2: req.body.status2,
            colour2: req.body.colour2
        }
    };

    request(requestOptions, (err, response, body) => {
        if (err) {
            return res.status(500).render('error', {
                message: 'unable to connect to the API server',
                error: err
            });
        }

        if (response.statusCode === 201) {
            res.redirect('/');
        }
        else {
            res.status(response.statusCode).render('error', {
                message: 'Error creating airport',
                error: body
            });
        }
    });
};

module.exports = {
    dashboard,
    airportCreate
};