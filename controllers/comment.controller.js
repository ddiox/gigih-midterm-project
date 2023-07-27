const Comment = require("../models/comment.model");
const Video = require("../models/video.model");

// GET Comment List by VideoID
const getCommentListByVideoID = async (req, res) => {
  try {
    const videoID = req.params.videoID;
    const comments = await Comment.find(
      { videoID: videoID },
      "username comment timestamp"
    );
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// POST Submit Comment
const submitComment = async (req, res) => {
  try {
    const { username, comment, videoID } = req.body;
    const timestamp = new Date();

    // Check if the videoID exists
    const existingVideo = await Video.findById(videoID);
    if (!existingVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Create a new comment
    const newComment = new Comment({
      videoID,
      username,
      comment,
      timestamp,
    });

    // Save the comment to the database
    await newComment.save();

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

module.exports = {
  getCommentListByVideoID,
  submitComment,
};
