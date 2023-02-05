const User = require("../models/userModels");

exports.userRegister = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  res.send(user);
};
