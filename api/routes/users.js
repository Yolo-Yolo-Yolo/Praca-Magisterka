const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//User Model
const User = require("../models/User");

// @route POST users
// @desc Register new user
// @access public
router.post("/", (req, res) => {
  const { email, password, album, imie, nazwisko, telefon} = req.body;
  
  // Simple validation
  if(!email|| !password || !album || !imie || !nazwisko || !telefon) {
      return res.status(400).json({ msg: 'Uzupełnij wszystkie pola'});
  }

  //Check for existing user
  User.findOne({ email })
  .then(user => {
      if(user) {
          return res.status(400).json({ msg: 'Taki użytkownik już istnieje'})
      }
      const newUser = new User({
          email,
          password,
          album,
          imie,
          nazwisko,
          telefon
      });
      // Create salt & hash password
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
              .then(user => {
                  jwt.sign(
                      {id: user.id}
                  )
                
                res.json({
                      user: {
                          id: user.id,
                          email: user.email,
                          album: user.album,
                          imie: user.imie,
                          nazwisko: user.nazwisko,
                          telefon: user.telefon
                      }
                  });
              })
          })
      })
  })
});

module.exports = router;
