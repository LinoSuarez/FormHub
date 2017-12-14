var db = require("../models/doctor.js");

module.exports = function(app) {

  app.post("/api/doctors", function(req, res) {
    console.log(req.body);
    db.Doctor.create({
      name: req.body.name,
      email: req.body.email,
      dr_username: req.body.dr_username,
      dr_password: req.body.dr_password
    })
    .then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

};