var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://prod:gbgamaprod10@ds135305.mlab.com:35305/heroku_60dl103q");

console.log("Connected to the database")

module.exports = {mongoose};
