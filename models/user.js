var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userPosts = new Schema({
  
});

var userlikes = new Schema({
  
});


var userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    image : [userPosts],
    comment: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);