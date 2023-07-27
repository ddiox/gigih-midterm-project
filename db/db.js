const mongoose = require("mongoose");

const dbUrl = "mongodb://127.0.0.1:27017/final";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDB;
