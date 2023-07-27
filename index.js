const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const videoRouter = require("./routes/video.routes");
const productRouter = require("./routes/product.routes");
const commentRouter = require("./routes/comment.routes");

const app = express();
const port = 3000;

// Connect to Database
connectDB();

app.use(bodyParser.json());

app.use(videoRouter);
app.use(productRouter);
app.use(commentRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/`);
});
