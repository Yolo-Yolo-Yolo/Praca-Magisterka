const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const information = require('./routes/information');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());

//MongoDB Connection
const db = require('./config/key').mongoURI; // Load mongoURI from config/key.js
mongoose
  .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }) // Necessary for MongoDB to work properly
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.log(err)); // Catching errors

//Use routes
app.use('/information',information);


//Server listening on port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
