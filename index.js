const express = require("express");
const connectDB = require("./db/db");

const app = express();

// Connect to Database
connectDB();

app.get("/", (req, res) => {
  res.send("Halo, dunia!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});
