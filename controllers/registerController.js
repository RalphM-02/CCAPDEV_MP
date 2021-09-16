const UserModel = require("../models/UserModel.js");
const bcrypt =  require("bcrypt");
const saltRounds = 10;

const registerController = {
    getRegister: function(req, res){
        res.render("register");
    },

    postRegister: function(req, res){
    /*    UserModel.create(req.body, () =>{
            res.redirect("/success");
        });*/
        var username = req.body.username;
        var password = req.body.password;
        var image = req.body.image;
        var bio = ""

        bcrypt.hash(password, saltRounds, function(err, hash){
            var user = {
                username: username,
                password: hash,
                image: image,
                bio: bio
            }

            UserModel.create(user, ()=>{
                req.session.username = user.username;
                res.redirect("/");
            });
        });
    },

    getSuccess: function(req, res){
        var username = req.query.username;
        res.render("success", username);
    }
}

module.exports = registerController;