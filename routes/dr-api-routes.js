var db = require("../models");

module.exports = function(app) {

  app.post("/api/doctors", function(req, res) {
    console.log(req.body);
    db.Doctor.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    .then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

};