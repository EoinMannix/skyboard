const mongoose = require('mongoose');
const Airport = mongoose.model('Airport');

const airportsCreate = function (req, res) { 
    Airport.create({
        airportName: req.body.airportName,
        airportCode: req.body.airportCode,
        summary: req.body.summary,
        flights: [
            {
                flight: req.body.flight1,
                direction: req.body.direction1,
                place: req.body.place1,
                time: req.body.time1,
                gate: req.body.gate1,
                terminal: req.body.terminal1,
                status: req.body.status1,
                colour: req.body.colour1,
            },
            {
                flight: req.body.flight2,
                direction: req.body.direction2,
                place: req.body.place2,
                time: req.body.time2,
                gate: req.body.gate2,
                terminal: req.body.terminal2,
                status: req.body.status2,
                colour: req.body.colour2,
            }
        ]
    })

    .then(airport => {
        res 
          .status(201)
          .json(airport);
    })
    .catch(err => {
        res
          .status(400)
          .json({ message: "Error creating airport", error: err});
    });
};
const airportsListByDistance = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const airportsReadOne = function (req, res) {
    if (req.params && req.params.airportid) {
        Airport
            .findById(req.params.airportid)
            .then(airport => {
                if (!airport) {
                    return res
                        .status(404)
                        .json({ message: "airport not found" });
                }
                res
                  .status(200)
                  .json(airport);
            })
            .catch(err => {
                res
                  .status(500)
                  .json({ message: "Error retrieving airport", error: err});
            });
    }   else {
            res
              .status(400)
              .json({ message: "No airport in request" });
    }
 };
const airportsUpdateOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const airportsDeleteOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };

module.exports = {
    airportsListByDistance,
    airportsCreate,
    airportsReadOne,
    airportsUpdateOne,
    airportsDeleteOne
};