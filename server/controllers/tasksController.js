const con = require("../utils/database");

//  `customers`(`ID`, `CustomerName`, `Occupation`, `Phone`, `Email`)
//  `tasks`(`ID`, `Description`, `IsCompleted`, `CustomerID`, `createdAt`)

// CREATE(task);
exports.insertNewTask = async (req, res) => {
  let woman = await con.execute(`INSERT INTO tasks(Description,CustomerID) VALUES ('${req.body.Description}','${req.body.CustomerID}')`);
  res.send(woman[0]);
};
// URL:   http://www.localhost:5004/tasks/insertNewTask

// READ(tasks);
exports.getAllTasks = async (req, res) => {
  let tasks = await con.execute(`SELECT tasks.ID, tasks.Description, tasks.IsCompleted, tasks.createdAt, tasks.CustomerID, customers.CustomerName FROM tasks INNER JOIN customers ON tasks.CustomerID=customers.ID ORDER BY tasks.ID`);
  res.send(tasks[0]);
};
// URL:   http://www.localhost:5004/tasks/getAllTasks

// UPDATE (task)
exports.updateTask = async (req, res) => {
  let task = await con.execute(`UPDATE tasks SET IsCompleted=${req.body.IsCompleted === 0 ? 1 : 0} WHERE ID=${req.body.ID}`);
  res.send(task[0]);
};
// URL:   http://www.localhost:5004/tasks/updateTask

// // DELETE (task)
exports.deleteTaskByID = async (req, res) => {
  let task = await con.execute(`DELETE FROM tasks WHERE ID=${req.query.ID}`);
  res.send(task[0]);
};
// URL:   http://www.localhost:5004/tasks/deleteTaskByID?ID=
