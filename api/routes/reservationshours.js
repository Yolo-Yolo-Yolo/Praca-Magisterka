const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')


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
        godziny: req.body.godziny,
        Code: req.body.Code
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
  router
.post("/upgrade/:id/:id2", (req, res) => {
  ReservationHours.findOneAndUpdate(
    { 
      // convert id to object id if not using (mongoose.Types.ObjectId(req.params.id))
      Code: req.params.id, 
      godziny: {
          $elemMatch: {
              id: req.params.id2,
              isBooked: false
          }
      }
    },
    // use positional operator $ to update in specific object
    { $set: { "godziny.$.isBooked": true } }
  )
  .then(ReservationHours =>
      ReservationHours.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
router
.post("/downgrade/:id/:id2", (req, res) => {
  ReservationHours.findOneAndUpdate(
    { 
      // convert id to object id if not using (mongoose.Types.ObjectId(req.params.id))
      Code: req.params.id, 
      godziny: {
          $elemMatch: {
              id: req.params.id2,
              isBooked: true
          }
      }
    },
    // use positional operator $ to update in specific object
    { $set: { "godziny.$.isBooked": false } }
  )
  .then(ReservationHours =>
      ReservationHours.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});

router
.post("/confirm/:id/:id2", (req, res) => {
  ReservationHours.findOneAndUpdate(
    { 
      // convert id to object id if not using (mongoose.Types.ObjectId(req.params.id))
      Code: req.params.id, 
      godziny: {
          $elemMatch: {
              id: req.params.id2,
              isConfirmed: false
          }
      }
    },
    // use positional operator $ to update in specific object
    { $set: { "godziny.$.isConfirmed": true } }
  )
  .then(ReservationHours =>
      ReservationHours.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;