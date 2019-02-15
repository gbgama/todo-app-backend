var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://zrkdev:zrkdev11@ds063150.mlab.com:63150/heroku_1jwcwgtm",
  {
    useMongoClient: true
  }
);

console.log("Connected to the database");

module.exports = { mongoose };
