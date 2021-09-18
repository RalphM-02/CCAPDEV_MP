const mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
    author:{
        type: String
    },
    image:{
        type: String
    },
    content:{
        type: String
    },
    upvoteCount:{
        type: Number
    }
});

module.exports = mongoose.model("Post", PostSchema);