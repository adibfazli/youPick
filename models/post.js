var mongoose = require('mongoose')

var Schema = mongoose.Schema

//---------------------------------------

// var commentSchema = new Schema({
//   comment: String
// }, {
//     timestamps: true
// });

// var likeSchema = new Schema({
//   like: String
// }, {
//     timestamps: true
// });
//---------------------------------------

var postSchema = new Schema({
  url: String,
  caption: String,
  likes: [],
  comments: [{
    user: String,
    comment: String
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);