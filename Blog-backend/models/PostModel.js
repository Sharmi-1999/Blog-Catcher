const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  img_url: { type: String },
  likeCount: { type: Number, default: 0 },
  created_at: { type: String },
  updated_at: { type: String },
});

module.exports = mongoose.model("Blog", BlogPost);
