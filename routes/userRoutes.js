const router = require("express").Router();
const userController = require("../controllers/userController");

// user post request
router.post("/register", userController.user_register);

module.exports = router;
