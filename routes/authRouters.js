const express = require("express");
const {
  registationController,
  loginController,
} = require("../controllers/authController");
const router = express.Router();

const { asyncWrapper } = require("../helpers/apiHelpers");

router.get("/registration", registationController);

router.get("/login", asyncWrapper(loginController));

module.exports = router;
