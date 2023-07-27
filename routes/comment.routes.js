const express = require("express");
const commentController = require("../controllers/comment.controller");

const router = express.Router();

// GET Comment List by VideoID
router.get(
  "/videos/:videoID/comments",
  commentController.getCommentListByVideoID
);

// POST Submit Comment
router.post("/submit-comment", commentController.submitComment);

module.exports = router;
