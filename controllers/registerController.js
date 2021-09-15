const UserModel = require("../models/UserModel.js");

const registerController = {
    getRegister: function(req, res){
        res.render("register");
    },

    postRegister: function(req, res){
        UserModel.create(req.body, () =>{
            res.redirect("/register");
        });
    },

    getSuccess: function(req, res){
        var username = req.query.username;
        res.render("success", username);
    }
}

module.exports = registerController;