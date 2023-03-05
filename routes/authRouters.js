const express = require("express");
const router = express.Router();
const {

} = require("../controllers/contactsControllers");
const { asyncWrapper } = require("../helpers/apiHelpers");

router.get("/", asyncWrapper(getContactsController));

router.get("/:id", asyncWrapper(getContactByIdController));



module.exports = router;
