const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    userId: {
        type : String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type:String,
    },
    postPicture: {
        type: String
    },

})

const Post = mongoose.model("Post",postSchema);

module.exports = Post