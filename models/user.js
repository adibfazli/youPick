var mongoose = require('mongoose')

var Schema = mongoose.Schema
//---------------------------------------
var likesAndComments = new Schema({
  like: Boolean,
  comment: String
});
//---------------------------------------
var userPosts = new Schema({
  image: String,
  subPosts:[likesAndComments],
});
//---------------------------------------
var userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    posts : [userPosts],
    comment: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);