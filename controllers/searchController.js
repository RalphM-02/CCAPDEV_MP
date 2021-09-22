const UserModel = require("../models/UserModel");
const post = require("../models/PostModel.js");

const searchController = {
    getSearch: function(req, res){
        if(req.session.username){
            var sessionName = req.session.username;
            res.render("search", {sessionName: sessionName});
        }
        else{
            res.render("/");
        }
    },
    postSearch: function(req, res){    
        if(req.session.username){
            var search = req.body.search;
            post.find({content: {$regex: search, $options: 'i'}}, function(err, posts){
                if(err) throw(err)
                res.render("result", {sessionName: req.session.username, posts});
            });
        }
        else{
            res.redirect("/");
        }
    }
    
}

module.exports = searchController;