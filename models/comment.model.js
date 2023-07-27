const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  videoID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
