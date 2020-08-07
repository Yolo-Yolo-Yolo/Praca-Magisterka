const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const ReservationHoursSchema = new Schema({
  do_kogo: {
    type: String,
    required: true
  },
  Startdate: {
    type: Date,
    required: true
  },
  EndDate: {
    type: Date,
    required: true
  }
});

module.exports = ReservationHours = mongoose.model('ReservationHours', ReservationHoursSchema);
