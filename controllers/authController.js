const { registration, login } = require("../services/authService");

const registationController = async (req, res) => {
  const { email, password } = req.body;
  await registration(email, password);
  return res.status(200).json({ status: "success", code: 200 });
};

const loginController = async (req, res) => {};

module.exports = {
  loginController,
  registationController,
};
