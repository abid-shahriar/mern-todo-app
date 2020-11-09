const jwt = require("jsonwebtoken");

const userDeleteAuth = (req, res, next) => {
  try {
    const token = req.header("auth-token");

    if (!token) {
      return res.status(401).json({ msg: "authentication denied" });
    }

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifiedToken) {
      return res.status(401).json({ msg: "authentication denied" });
    }

    req.user = verifiedToken.id;
    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = userDeleteAuth;
