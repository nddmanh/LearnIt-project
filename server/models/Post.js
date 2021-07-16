const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'Title must be required.']
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    status: {
        type: String,
        enum: ['TO LEARN', 'LEARNING', 'LEARNED']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;