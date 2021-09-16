const UserModel = require("../models/UserModel.js");

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

    }
}

module.exports = profileController;