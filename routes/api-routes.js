var db = require("../models");

var auth = require("../auth/auth.js");

module.exports = function(app) {

  app.post("/api/user/new", function(req, res) {
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: auth.encrypt(req.body.password),
      designation: req.body.designation
    })
    .then(function(dbDoctor) {
      res.json(true);
    }).catch(function(error){
      
    });
  });


  app.post("/api/user/login", function(req, res) {
    db.Users.findOne({
      where: {
        username: req.body.username,
        password: auth.encrypt(req.body.password)
      }
    }).then(function(answer) {
      
      if (answer){ //if user and password matches
          var token = auth.makeid();
          db.Users.update({
          token: token}, 
          {where: {
            id: answer.id
          }
        }).then(function(){
          res.json(token)
        })
      } else {
        res.json(false);
      }
      
    }).catch(function(error){
      
    })
  });

  app.post("/api/formOne", function(req, res) {
    console.log(req.body);
    db.FormOne.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(function(dbFormOne) {
      res.json(dbFormOne);
    });
  });

};

