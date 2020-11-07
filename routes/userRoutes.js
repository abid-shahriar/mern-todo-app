const router = require("express").Router();

// user get request
router.get("/test", (req, res) => {
  res.send("hello world");
});

module.exports = router;
