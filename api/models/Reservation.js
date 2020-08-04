const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const ReservationSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  album: {
    type: Number,
    required: true,
    unique: true
  },
  imie: {
    type: String,
    required: true
  },
  nazwisko: {
    type: String,
    required: true
  },
  telefon: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true 
  }
});

module.exports = Reservation = mongoose.model('Reservation', ReservationSchema);
