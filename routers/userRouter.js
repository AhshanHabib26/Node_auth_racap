const express = require("express");
const {
  userRegister,
  userLogin,
  forgotPassword,
  resetPassword,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
