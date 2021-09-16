const UserModel = require("../models/UserModel.js");

const loginController = {
    getLogin: function(req, res){
        res.render("login");
    },
    postLogin: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        UserModel.findOne({username: username, password: password}, ()=>{
            req.session.username = username;
            res.redirect("/");
        });
    }
}

module.exports = loginController;