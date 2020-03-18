const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const InformationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Information = mongoose.model('information', InformationSchema);
