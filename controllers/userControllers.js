const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/userModels");

exports.userRegister = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  const token = await user.getJwtToken();

  res.status(200).json({
    success: true,
    token,
  });
});
