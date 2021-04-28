const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    photo: String
});

mongoose.model('User', userSchema);
const User = new model('User', userSchema);

module.exports = User;