const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

//Reservation Model
const Reservation = require("../models/Reservation");

//ReservationHours Model
const ReservationHours = require("../models/ReservationHours");

// @route POST ReservationHours
// @desc Create an ReservationHours
// @access private
router.post("/hours", auth, (req, res) => {
    const newReservationHours = new ReservationHours({
        do_kogo: req.body.do_kogo,
        Startdate: req.body.Startdate,
        EndDate: req.body.EndDate,
        StartdateFormatPL: req.body.StartdateFormatPL,
        EndDateFormatPL: req.body.EndDateFormatPL,
        godziny: req.body.godziny
    });
    newReservationHours.save().then(ReservationHours => res.json(ReservationHours));
  });


// @route GET ReservationHours
// @desc get all ReservationHours
// @access public
router.get("/hours", (req, res) => {
    ReservationHours.find()
      .sort({ date: -1 })
      .then(items => res.json(items)); 
  });

// @route GET ReservationHours
// @desc get my ReservationHours
// @access public
router.get("/hours/:do_kogo", (req, res) => {
  ReservationHours.find({do_kogo: req.params.do_kogo})
    .sort({ date: -1 })
    .then(items => res.json(items)); 
});

// @route DELETE ReservationHours
// @desc Delete a ReservationHours
// @access private
router
  .delete("/hours/:id", auth, (req, res) => {
    ReservationHours.findById(req.params.id).then(ReservationHours =>
        ReservationHours.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
  });


module.exports = router;