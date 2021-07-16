const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers.js");

router.get("/getUserByEmail", usersController.getUserByEmail);

module.exports = router;
