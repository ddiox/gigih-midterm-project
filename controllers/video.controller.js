const Video = require("../models/video.model");

// GET Video Thumbnail List
const getVideoThumbnails = async (req, res) => {
  try {
    const videos = await Video.find({}, "_id title description thumbnailUrl");
    res.status(200).json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getVideoThumbnails,
};
