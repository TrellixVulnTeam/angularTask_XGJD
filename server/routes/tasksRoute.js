const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.get("/getAllTasks", tasksController.getAllTasks);
router.post("/insertNewTask", tasksController.insertNewTask);
router.post("/updateTask", tasksController.updateTask);
router.get("/deleteTaskByID", tasksController.deleteTaskByID);

module.exports = router;
