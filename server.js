var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')




var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser())

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");

/*
	*TODO: Create controller
*/

// var routes = require("./controllers/PLACEHOLDER.js");

// app.use("/", routes);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});