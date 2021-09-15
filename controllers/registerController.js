const db = require("../models/db.js");
const UserModel = require("../models/UserModel.js");

const registerController = {
    getRegister: function(req, res){
        res.render("register");
    },

    postRegister: function(req, res){
        var username = req.body.username;
        var password = req.body.password;
        var confirmpw = req.body.confirmpw;
        var image = req.body.image;

        var user = {
            username: username,
            password: password,
            confirmpw: confirmpw,
            image: image
        };

        if(user.password == user.confirmpw){
            db.insertOne(UserModel,user, function(err){
                if(err){
                    console.log("added user");
                    res.redirect("/success?username=" + user.username);
                }
            });
        }
        else{
            console.log("error");
        }
    },

    getSuccess: function(req, res){
        var username = req.query.username;
        res.render("success", username);
    }
}

module.exports = registerController;