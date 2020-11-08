const userModel = require("../models/userModel");

const user_register = async (req, res) => {
  try {
    const { email, password, passwordCheck, DisplayName } = req.body;

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

    const exixtingUser = await userModel.find({ email: email });
    if (exixtingUser) {
      return res
        .status(400)
        .json({ msg: "Account with this email already exisrts." });
    }
    if (!DisplayName) DisplayName = email;
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { user_register };
