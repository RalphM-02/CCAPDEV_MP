const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");

const loginController = {
    getLogin: function(req, res){
        res.render("login");
    },
    postLogin: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        var error = "Username and/or Password is incorrect";
        UserModel.findOne({username: username}, (err, result)=>{
            if(err) throw(err)
            if(result){
                bcrypt.compare(password, result.password, function(err, equal){
                    if(err) throw(err)
                    if(equal){
                        req.session.username = username;
                        res.redirect('/');
                    }
                    else{                        
                        res.render("login", {error: error});
                    }
                });
            }
            else{               
                res.render("login", {error: error});
            }
            
        });
    }
}

module.exports = loginController;