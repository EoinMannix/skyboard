const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

    flight: {
        type: String,
        required: false 
    },  
    direction: {
        type: String,
        required: false
    },
    place: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
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