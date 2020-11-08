const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  displayName: { type: String },
  password: { type: String, required: true, minlength: 6 },
});

module.exports = userModel = mongoose.model("user", userSchema);
