const mongoose = require('mongoose');
const schema = mongoose.Schema({
  avatarIcon: String,
  userName: String,
  handle: String,
  time: String,
  content: String,
  image: String,
  comment: Number,
  retweet: Number,
  like: Number,
  share: String,
  link: {
    image: String,
    title: String,
    text: String,
    link: String
  }
}, {collection: "tweets"});

module.exports = schema;