const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
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
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
