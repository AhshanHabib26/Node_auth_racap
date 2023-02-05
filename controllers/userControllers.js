const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/userModels");
const ErrorResponse = require("../utils/errorResponse");

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

exports.userLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const isPassMatch = await user.matchPassword(password);

  if (!isPassMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  const token = await user.getJwtToken();

  res.status(200).json({
    success: true,
    token,
  });
});
