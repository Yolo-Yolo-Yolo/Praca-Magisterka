const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

//Reservation Model
const Reservation = require("../models/Reservation");


router.post("/new", auth, (req, res) => {
    const newReservation = new Reservation({
        id_terminu: req.body.id_terminu,
        do_kogo: req.body.do_kogo,
        temat: req.body.temat,
        opis: req.body.opis,
        potwierdzona: req.body.potwierdzona,
        date: req.body.date,
        user: req.body.user
    });
    newReservation.save().then(Reservation => res.json(Reservation));
  });

  router.delete("/delete/:id", auth, (req, res) => {
    Reservation.findById(req.params.id).then(Reservation =>
        Reservation.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
  });

  router.get("/all", (req, res) => {
    Reservation.find()
      .sort({ date: -1 })
      .then(items => res.json(items)); 
  });

  router.get("/:album", (req, res) => {
    Reservation.find({album: req.params.album})
      .sort({ date: -1 })
      .then(items => res.json(items)); 
  });
  

module.exports = router;