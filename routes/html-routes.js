var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.get("/registration", function(req, res) {
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.findOne({
            where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            
            if (matched) {
                res.redirect("/")
            } else {
                res.render("registration")
            }
            
        })
      });

    app.get("/api/form/registration", function(req, res) {
        res.render("form_ptregistration")
    });

      app.get("/login", function(req, res) {
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.findOne({
            where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            
            if (matched) {
                res.redirect("/")
            } else {
                res.render("login")
            }
            
        }) 
      });
      app.get("/", function(req, res){
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.findOne({
            where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            console.log(matched)
            if (matched) {
                if (matched.designation === "Doctor"){
                    res.render("doctor", {name: matched.name, designation: matched.designation})
                } else if (matched.designation === "Patient"){
                    res.render("patient", {name: matched.name, designation: matched.designation})
                }
                
            } else {
                res.render("login")
            }
            
        })
          
      })
      app.get("/logout", function(req, res){
        var token = req.cookies.token
        var username = req.cookies.username

        db.Users.update({
            token: null},
            {where: {
                username: username,
                token: token
            }
        }).then(function(matched){
            
           res.redirect("/login");
            
        })
          
      })
    //   app.get("/doctor", function(req, res){
    //       res.render("doctor")
    //   });

    //   app.get("/patient", function(req, res){
    //       res.render("patient")
    //   })

    //  app.get("/new_patient", function(req,res){
         
    //      res.render("form_ptregistration"); 
    //   })

    // app.get("/medical_history", function(req,res){
    //     res.render("form_history");
       
    // })

    app.get("/:forms?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.forms) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      db.FormTemplates.findOne({
        where: {
          formRoute: req.params.forms
        }
      }).then(function(result) {
          res.render(result.formRoute);
      });
    }

    // Otherwise...
    else if (!req.params.forms){
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      res.redirect("/");
    }

  });   

};