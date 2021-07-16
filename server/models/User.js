const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: [true, 'username must be required.']
    },
    password: {
        type: String, 
        required: [true, 'Password must be required.'],
        minlength: [6, 'Password must be at least 6 charecters']
    },
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

module.exports = User;