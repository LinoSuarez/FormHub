var db = require("../models");

var auth = require("../auth/auth.js");

module.exports = function(app) {
// app.post("/api/form/registration", function(req, res){
//   db.Patform.create({
//     FirstName: req.body.FirstName,
//     MiddleName: req.body.MiddleName,
//     LastName: req.body.LastName,
//     emPhoneNum: req.body.emPhoneNum
//   }).then(function(Patform){
//     res.json(true);
//   }).catch(function(error){

//   });

// });
  app.post("/api/form/registration", function(req, res){
    // console.log(req.cookies.id)
    //console.log((req.body));
    console.log(req.body)
    db.FormVals.create({
      formRoute: req.body.formRoute,
      value: JSON.stringify(req.body.patient),
      userID: req.cookies.id
    })
    .then(function(){
      res.end();
    });

  });

  app.post("/api/form/history", function(req, res) {
    // console.log(JSON.stringify(req.body));
    db.FormVals.create({
      formId: 2,
      value: JSON.stringify(req.body),

    })
    .then(function() {
      res.end();
    });
  });

  app.post("/api/user/new", function(req, res) {
    // console.log(req.body)
    // console.log(req.body.email.length)
    db.Users.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: auth.encrypt(req.body.password),
      designation: req.body.designation
    })
    .then(function(dbDoctor) {
     // res.json(true);
     if (dbDoctor){

     
      var token = auth.makeid();
        db.Users.update({
        token: token}, 
        {where: {
          id: dbDoctor.id
        }
      }).then(function(){
        res.json({token: token, id: dbDoctor.id})
      })
    } else {
      res.json(false)
    }
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
          res.json({token: token, id: answer.id})
        })
      } else {
        res.json(false);
      }
      
    }).catch(function(error){
      
    })
  });
  app.post("/api/patient/forms", function(req, res) {

    db.Users.update({
      formTofill: req.body.arrayForms},
      {where: {
        email: req.body.email
      }
    }).then(function(response){
      if (response){
        res.json(true)
      } else {
        res.json(false)
      }
    })
  })

  app.post("/api/doctos/client/autocomplete", function(req, res){
    
    db.Users.findAll({
      where: {
        designation: "Patient"
      }
    }).then(function(response){
      var emails = response.map(function(data){
        return data.email
      })
      res.json(emails)
    })
  })
};

