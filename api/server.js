//Loading additional used libraries 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require('config');
//Loading path
const path = require('path');
//Loading routes
const information = require('./routes/information');
const users = require('./routes/users');
const auth = require('./routes/auth');
const reservationshours = require('./routes/reservationshours');
const reservations = require('./routes/reservations');
//Loading app
const app = express();
const port = process.env.PORT || 5000;
//Loading Express and body Parser
app.use(express.json());
app.use(bodyParser.json());

//MongoDB Connection
const db = config.get('mongoURI'); // Load mongoURI from config/key.js
mongoose
  .connect(db,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }) // Necessary for MongoDB to work properly
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.log(err)); // Catching errors

//Use routes
app.use('/information',information);
app.use('/users', users);
app.use('/auth', auth);
app.use('/reservationshours', reservationshours);
app.use('/reservations', reservations);
// Serve static assets in production HEROKU UPLOAD
if(process.env.NODE_ENV === 'production') {
  //Set static folder for Deployment!!
  app.use(express.static('frontend-react/build'));

  app.get ('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend-react', 'build', 'index.html'));
  });
}

//Server listening on port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
