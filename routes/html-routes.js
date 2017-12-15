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
            
            if (matched) {
                res.render("index", {username: username})
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

};