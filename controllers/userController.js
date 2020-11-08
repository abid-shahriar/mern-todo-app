const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const user_register = async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;

    // validation
    if (!email || !password || !passwordCheck) {
      return res
        .status(400)
        .json({ msg: "please fill all the required fields!" });
    }

    if (password.length < 5) {
      return res
        .status(400)
        .json({ msg: "The password should be at least 5 character." });
    }

    if (password !== passwordCheck) {
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });
    }

    const exixtingUser = await userModel.findOne({ email: email });
    if (exixtingUser) {
      return res
        .status(400)
        .json({ msg: "Account with this email already exisrts." });
    }
    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      email,
      password: passwordHash,
      displayName,
    });

    const savedUser = await newUser.save();

    res.send(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const user_login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ msg: "please enter an email and a password." });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.json({ msg: "Please enter a valid email address." });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { user_register, user_login };
