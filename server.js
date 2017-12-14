var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var mysql = require("mysql");

/*
	*TODO: Create controller
*/

// var routes = require("./controllers/PLACEHOLDER.js");

// app.use("/", routes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});