app.use(express.static(path.join(__dirname, 'public')));

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// // Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "views/portfolio.html"));
});

// Get all characters
app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "views/contact.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
