const UserModel = require("../models/UserModel.js");
const Post = require("../models/PostModel.js");

const homeController = {
    getHome: function(req, res){
        if(req.session.username){
            Post.find({}, function(err, posts){
                if(err) throw(err)
                res.render("home", {username: req.session.username, posts});
            });
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
    },
    getNewPost: function(req, res){
        if(req.session.username){
            var content = req.query.content;
            UserModel.findOne({username: req.session.username}, function(err, user){
                if(err)throw(err)
                var post = {
                    author: user.username,
                    image: user.image,
                    content: content,
                    upvoteCount: 0
                }
                Post.create(post, function(err,result){
                    if(err) throw(err)
                    console.log(result);
                    res.render("partials/post", post);
                });
            });
        }
        else{
            res.render("error");
        }
    }
}

module.exports = homeController;