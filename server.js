//DECLARE DEPENDENCIES
var http = require("http");
var fs = require('fs');
var path = require('path');
var express = require('express');
// var data = fs.readFileSync('./db/db.json');
// var notesDB = require('./db/db.json');
// Instantiate a new express app utilizing the express() method.
var app = express();
const notesDB = [];

//Decleare a port number for the server to find the application.
var PORT = process.env.PORT || 8080;

// Middleware to handle parsing of the request string and converts to a json object. Later referred to as req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Create the API delete routes
require ("./routes/apiRoutes")(app)
require ("./routes/htmlRoutes")(app)



//Turns our server on
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});