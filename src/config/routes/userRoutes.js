const express = require("express");
const router = express.Router();
const { create } = require("../controllers/userController");
const { validationMiddleware } = require("../middleware/validations");
const validationData = require("../../../validations/user");
router.post("/create", validationMiddleware(validationData.createUser), create);

module.exports = router;
