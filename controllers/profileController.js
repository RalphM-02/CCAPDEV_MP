const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const profileController = {
    getProfile: function(req, res){
        var username = req.params.username;
        var image;
        var owned;
        var bio;
        UserModel.findOne({username: username}, function(err, user){
            if(err)throw(err)
            if(user.username = req.session.username){
                owned = true;
            }
            else{
                owned =  false;
            }
            image = user.image;
            bio = user.bio;
            res.render("profile", {username: username, image: image, owned: owned, bio: bio});
        });
    },
    getUpdateProfile: function(req, res){
        if(req.session.username){
            UserModel.findOne({username: req.session.username}, function(err, result){
                if(err)throw(err)
                var details = {
                    username: result.username,
                    bio: result.bio
                }
                res.render("editProfile", details);
            });
        }
        else{
            res.render("error");
        }
    },
    postUpdateUsername: function(req, res){
        var username = req.session.username;
        var updateUsername = req.body.updateUsername;

        UserModel.updateOne({username: username}, {username: updateUsername}, function(err, result){
            if(err) throw(err)
            req.session.username = updateUsername;
            res.redirect("/profile/" + req.session.username);
        });
    },
    postUpdatePassword: function(req, res){
        var username = req.session.username;
        var updatePassword = req.body.updatePassword;
        bcrypt.hash(updatePassword, saltRounds, function(err, hash){
            UserModel.updateOne({username: username}, {password: hash}, function(err, result){
                if(err)throw(err)
                res.redirect("/profile/" + req.session.username);
            });
        });
    },
    postUpdateBio: function(req, res){
        var username = req.session.username;
        var updateBio = req.body.updateBio;
        UserModel.updateOne({username: username}, {bio: updateBio}, function(err, result){
            if(err) throw(err)
            res.redirect("/profile/" + req.session.username);
        });
    },
    getCheckNewUsername: function(req, res){
        var newUsername = req.query.updateUsername;
        UserModel.findOne({username: newUsername}, 'username', function(err, result){
            if(err) throw(err)
            console.log(result);
            res.send(result);
        });
    }
}

module.exports = profileController;