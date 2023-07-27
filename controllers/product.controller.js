const Product = require("../models/product.model");

// GET Product List by VideoID
const getProductListByVideoID = async (req, res) => {
  try {
    const videoID = req.params.videoID;
    const products = await Product.find(
      { videoID: videoID },
      "_id title description imageUrl link price"
    );
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProductListByVideoID,
};
