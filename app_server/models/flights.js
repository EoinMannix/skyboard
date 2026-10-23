const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

        flight: String,
        direction: String,
        place: String,
        time: String,
        gate: String,
        terminal: String,
        status: String,
        colour: String,
        starred: {
            type: Boolean,
            'default': false
        } 
});