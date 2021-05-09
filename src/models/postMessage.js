const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{type: String, required: true},
    message: {type: String},
    creator: {type: String, required: true},
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});


const PostMessage = mongoose.model('PostMessage', postSchema);

module.exports = PostMessage;