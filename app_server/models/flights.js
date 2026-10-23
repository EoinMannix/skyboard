const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

    flight: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    gate: String,
    terminal: String,
    status: String,
    colour: String,
    starred: {
        type: Boolean,
        'default': false
    }
        
});

const airportSchema = new mongoose.Schema({

    airportName: {
        type: String,
        required: true
    },
    airportCode: {
        type: String,
        required: true
    },
    summary: String,
    flights: [flightSchema]
            
});

mongoose.model('Airport', airportSchema);