const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const ReservationSchema = new Schema({
  id_terminu: {
    type: String,
    required: true 
  },
  Code: {
    type: String,
    required: true 
  },
  date: {
    type: String,
    required: true
  },
  dateUS: {
    type: String,
    required: true
  },
  do_kogo: {
    type: String,
    required: true 
  },
  temat: {
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
  user: {
    type: Array,
    required: true
  },
  album: {
    type: Number,
    required: true
  },
});

module.exports = Reservation = mongoose.model('Reservation', ReservationSchema);
