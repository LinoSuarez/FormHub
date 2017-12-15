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
                    res.render("patient", matched)
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

    app.get("/new_patient", function(req,res){
         
         res.render("form_ptregistration"); 
      })

    app.get("/medical_history", function(req,res){
        res.render("form_history");
       
    })

};