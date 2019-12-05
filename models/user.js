var mongoose = require('mongoose')

var Schema = mongoose.Schema

//---------------------------------------
var userSchema = new Schema({
    name: String,
    bio: String,
    email: String,
    avatar: String,
    googleId: String,
    posts : [{
      type: Schema.Types.ObjectId,
      ref: "Post"
    }],
    comment: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);