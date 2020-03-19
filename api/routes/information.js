const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')

//Information Model
const Information = require("../models/Information");

// @route GET information
// @desc get all Information
// @access public
router.get("/", (req, res) => {
  Information.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST information
// @desc Create an information
// @access private
router.post("/", auth, (req, res) => {
  const newInformation = new Information({
    title: req.body.title,
    info: req.body.info
  });
  newInformation.save().then(Information => res.json(Information));
});

// @route DELETE information
// @desc Delete a information
// @access private
router
  .delete("/:id", auth, (req, res) => {
    Information.findById(req.params.id).then(Information =>
      Information.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;
