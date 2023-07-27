const express = require("express");
const videoController = require("../controllers/video.controller");

const router = express.Router();

// GET Video Thumbnail List
router.get("/videos", videoController.getVideoThumbnails);

module.exports = router;
