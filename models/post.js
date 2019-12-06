var mongoose = require('mongoose')

var Schema = mongoose.Schema

var postSchema = new Schema({
  url: String,
  caption: String,
  likes: [],
  comments: [{
    user: String,
    comment: String,
    usrId: String,
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);