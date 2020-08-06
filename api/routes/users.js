const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth');

//User Model
const User = require("../models/User");


// @route GET users
// @desc get all users
// @access private
router.get("/getall", auth, (req, res) => {
  User.find()
    .select('-password')
    .then(items => res.json(items));
});

// @route DELETE user
// @desc DELETE user
// @access private
router
  .delete("/delete/:id", auth, (req, res) => {
    User.findById(req.params.id).then(User =>
      User.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
  });

// @route POST user/upgrade
// @desc POST user/upgrade
// @access private
router
.post("/upgrade/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { isAdmin: true }, { useFindAndModify: false }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});

// @route POST user/downgrade
// @desc POST user/downgrade
// @access private
router
.post("/downgrade/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { isAdmin: false }, { useFindAndModify: false }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});


// @route POST users
// @desc Register new user
// @access public
router.post("/", (req, res) => {
  const { email, password, album, imie, nazwisko, telefon, isAdmin, rola } = req.body;

  // Simple validation
  if (!email || !password || !album || !imie || !nazwisko || !telefon) {
    return res.status(400).json({ msg: "Uzupełnij wszystkie pola" });
  }

  //Check for existing user
  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ msg: "Taki użytkownik już istnieje" });
    }
    const newUser = new User({
      email,
      password,
      album,
      imie,
      nazwisko,
      telefon,
      isAdmin : false,
      rola : "Użytkownik"
    });
    // Create salt & hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  email: user.email,
                  album: user.album,
                  imie: user.imie,
                  nazwisko: user.nazwisko,
                  telefon: user.telefon,
                  isAdmin: user.isAdmin,
                  rola: user.rola
                }
              });
            }
          );
        });
      });
    });
  });
});

// 
// Changing Roles
//
// @route POST user/upgraderole
// @desc POST user/upgraderole
// @access private
router
.post("/upgraderole/user/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { rola: "Użytkownik" }, { useFindAndModify: false }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
// @route POST user/upgraderole
// @desc POST user/upgraderole
// @access private
router
.post("/upgraderole/dsnauki/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { rola: "Prodziekan ds. Nauki" }, { useFindAndModify: false }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
// @route POST user/upgraderole
// @desc POST user/upgraderole
// @access private
router
.post("/upgraderole/dsksztalcenia/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { rola: "Prodziekan ds. Kształcenia" }, { useFindAndModify: false }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
// @route POST user/upgraderole
// @desc POST user/upgraderole
// @access private
router
.post("/upgraderole/dsstudenckich/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { rola: "Prodziekan ds. Studenckich" }, { useFindAndModify: true }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});
// @route POST user/upgraderole
// @desc POST user/upgraderole
// @access private
router
.post("/upgraderole/dsogolnych/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, { rola: "Prodziekan ds. Ogólnych" }, { useFindAndModify: false }).then(User =>
    User.save().then(() => res.json({ success: true }))
  )
  .catch(err => res.status(404).json({ success: false }));
});




module.exports = router;
