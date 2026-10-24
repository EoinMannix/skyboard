const mongoose = require('mongoose');
const Airport = mongoose.model('Airport');

const flightsCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const flightsReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const flightsUpdateOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const flightsDeleteOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };

module.exports = {
    flightsCreate,
    flightsReadOne,
    flightsUpdateOne,
    flightsDeleteOne
};