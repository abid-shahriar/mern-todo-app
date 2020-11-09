const router = require("express").Router();
const userController = require("../controllers/userController");
const userDeleteAuth = require("../middlewares/userDeleteAuth");

// user post request
router.post("/register", userController.user_register);
router.post("/login", userController.user_login);
router.delete("/delete", userDeleteAuth, userController.user_delete);

module.exports = router;
