const mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
    author:{
        type: String
    },
    content:{
        type: String
    },
    upvotes:{
        type: [String]
    }
});

module.exports = mongoose.model("Post", PostSchema);