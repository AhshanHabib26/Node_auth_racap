const express = require("express");
const { userRegister, userLogin, forgotPassword } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/forgotpassword", forgotPassword);

module.exports = router;
