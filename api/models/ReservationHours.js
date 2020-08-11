const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const ReservationHoursSchema = new Schema({
  do_kogo: {
    type: String,
    required: true
  },
  Startdate: {
    type: String,
    required: true
  },
  EndDate: {
    type: String,
    required: true
  },
  StartdateFormatPL: {
    type: String,
    required: true
  },
  EndDateFormatPL: {
    type: String,
    required: true
  },
  godziny: {
    type: Array,
    required: true
  }
});

module.exports = ReservationHours = mongoose.model('ReservationHours', ReservationHoursSchema);
