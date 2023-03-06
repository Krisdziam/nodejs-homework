const { NotAuthorizedError } = require("../helpers/errors");
const bcrypt = require("bcrypt");
const { User } = require("../models/userModel");

const registration = async (email, password) => {
  const user = new User({
    email,
    password: await bcrypt.hash("password", 10),
  });
  await user.save();
};

const login = async () => {
  const { email, password } = req.body;

  const user = new User({
    email,
    password,
  });
  await user.save();
};

module.exports = {
  registration,
  login,
};
