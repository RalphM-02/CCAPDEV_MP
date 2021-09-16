const UserModel = require("../models/UserModel.js");
const User = require("../models/UserModel.js");

const homeController = {
    getHome: function(req, res){
        if(req.session.username){
            var details ={
                username: req.session.username
            };
            res.render("home", details);
        }
        else{
            res.redirect("/login");
        }
    },
    getLogout: function(req, res){
        req.session.destroy(function(err){
            if(err)throw(err);
            res.redirect('/');
        });
    }
}

module.exports = homeController;