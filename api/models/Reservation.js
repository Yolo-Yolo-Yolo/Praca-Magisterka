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
  do_kogo: {
    type: String,
    required: true 
  },
  opis: {
    type: String,
    required: true 
  },
  potwierdzona: {
    type: Boolean,
    required: true 
  },
  id_terminu: {
    type: Boolean,
    required: true 
  }
});

module.exports = Reservation = mongoose.model('Reservation', ReservationSchema);
