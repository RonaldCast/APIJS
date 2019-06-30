const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  nombre: {
    type: String
  },
  apellido: {
      type : String
  },
  telefono : {
      type : String,
      required : true
  }

});

module.exports = mongoose.model('contacts', UserSchema)