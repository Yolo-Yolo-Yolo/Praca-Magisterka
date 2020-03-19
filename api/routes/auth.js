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
                  imie: user.imie
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
router.get('user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})

module.exports = router;
