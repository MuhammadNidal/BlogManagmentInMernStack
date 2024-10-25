const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blog-routes");
const userRouter = require("./routes/user-routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

// Connect to local MongoDB
mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .then(() => console.log("Connected to Local Database and Listening on Localhost 3000"))
  .catch((err) => console.log(err));
