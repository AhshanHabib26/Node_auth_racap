const express = require("express");
const { userRegister } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", userRegister);

module.exports = router;
