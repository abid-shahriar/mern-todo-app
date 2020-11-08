const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

const app = express();

// middlewares
app.use(express.json());

// connecting to database
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to db");
    app.listen(PORT, () => console.log(`app running on:${PORT}`));
  })
  .catch((err) => console.log(err));

// routes

app.use("/user", require("./routes/userRoutes"));
