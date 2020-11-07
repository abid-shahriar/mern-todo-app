const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

const app = express();

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to bd");
    app.listen(PORT, () => console.log(`app runnig on:${PORT}`));
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world");
});
