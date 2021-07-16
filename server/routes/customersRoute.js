const express = require("express");
const router = express.Router();
const customersController = require("../controllers/customersController");

router.get("/getAllCustomers", customersController.getAllCustomers);

module.exports = router;
