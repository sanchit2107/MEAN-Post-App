const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  titile: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
