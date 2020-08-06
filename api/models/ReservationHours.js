const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const ReservationHoursSchema = new Schema({
  do_kogo: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  hours: {
    type: Array,
    required: true
  }
});

module.exports = ReservationHours = mongoose.model('ReservationHours', ReservationHoursSchema);
