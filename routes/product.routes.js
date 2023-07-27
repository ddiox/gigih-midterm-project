const express = require("express");
const productController = require("../controllers/product.controller");

const router = express.Router();

// GET Product List by VideoID
router.get(
  "/videos/:videoID/products",
  productController.getProductListByVideoID
);

module.exports = router;
