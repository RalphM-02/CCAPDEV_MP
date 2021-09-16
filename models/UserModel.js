const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    bio:{
        type: String
    }
});

module.exports = mongoose.model("User", UserSchema);