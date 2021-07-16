const express = require("express");
const router = express.Router();
const womenController = require("../controllers/womenControllers");

router.get("/getWomenByUserID", womenController.getWomenByUserID);
router.post("/insertNewWoman", womenController.insertNewWoman);
router.post("/updateWomen", womenController.updateWomen);
router.get("/deleteWomanByID", womenController.deleteWomanByID);

module.exports = router;
