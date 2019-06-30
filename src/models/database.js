const mongoose = require('mongoose');
const config  = require('../config/config');

mongoose
  .connect(config.connectionString, { useNewUrlParser: true })
  .then(() => {
    console.log("Database is connected");
  });


module.exports  =  mongoose

