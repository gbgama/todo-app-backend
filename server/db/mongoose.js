var mongoose = require('mongoose');
var configs = require('../config/config')

mongoose.Promise = global.Promise;
mongoose.connect(configs.mongoDb);

console.log("Connected to the database")

module.exports = {mongoose};
