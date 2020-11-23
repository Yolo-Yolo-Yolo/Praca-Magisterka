const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth');

//User Model
const User = require("../models/User");

// @route POST auth
// @desc Auth user
// @access public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Uzupełnij wszystkie pola" });
  }

  //Check for existing user
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "Taki użytkownik nie istnieje" });
    }
    //Validate password
    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if(!isMatch) return res.status(400).json({ msg: 'Niepoprawne dane logowania'});
        //else return res.status(200).json({ msg: 'Zalogowano pomyślnie'});

        jwt.sign(
            { id: user.id, isAdmin: user.isAdmin },
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
    })
  });
});

// @route get auth/user
// @desc Auth user
// @access private
router.get('/', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})


router.post("/changepassword", (req, res) => {
  const { id, oldpassword, newpassword } = req.body
  if (!oldpassword || !newpassword) {
    return res.status(400).json({ msg: "Uzupełnij wszystkie pola" });
  }
  // find if old password is valid
  User.findOne({ _id: id })
    .then(user => {
      bcrypt.compare(oldpassword, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({ msg: 'Niepoprawne stare hasło'});
        bcrypt.genSalt(10, function(err, salt) {
          if (err) return
          bcrypt.hash(newpassword, salt, function(err, hash) {
            if (err) return
            User.findOneAndUpdate({ _id: id }, { password: hash })
              .then(() => res.status(200).json({ msg2: "Pomyślnie zmieniono hasło!" }))
              .catch(err => res.status(500).json(err))
          })
        })
      })
    })
    // highlight-end
    .catch(() => {
      res.status(404).json("Niepoprawny użytkownik")
    })

});


module.exports = router;
