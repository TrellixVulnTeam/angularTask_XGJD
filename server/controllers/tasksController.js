const con = require("../utils/database");

//  `customers`(`ID`, `CustomerName`, `Occupation`, `Phone`, `Email`)
//  `tasks`(`ID`, `Description`, `IsCompleted`, `CustomerID`, `createdAt`)

CREATE(task);
exports.insertNewWoman = async (req, res) => {
  let woman = await con.execute(`INSERT INTO tasks(Description) VALUES ('${req.body.WomanName}','${req.body.DateOfBirth}','${req.body.Country}','${req.body.Description}','${req.body.UserID}')`);
  res.send(woman[0]);
};

// READ(tasks);
exports.getAllTasks = async (req, res) => {
  let tasks = await con.execute(`SELECT tasks.ID, tasks.Description, tasks.IsCompleted, tasks.createdAt, tasks.CustomerID, customers.CustomerName FROM tasks INNER JOIN customers ON tasks.CustomerID=customers.ID`);
  res.send(tasks[0]);
};
// URL:   http://www.localhost:5004/tasks/getAllTasks

// UPDATE (woman)
// exports.updateWomen = async (req, res) => {
//   let woman = await con.execute(`UPDATE women SET WomanName='${req.body.WomanName}', DateOfBirth='${req.body.DateOfBirth}' ,Country='${req.body.Country}' ,Description='${req.body.Description}' WHERE ID=${req.body.ID}`);
//   res.send(woman[0]);
// };
// URL:   http://www.localhost:5004/women/updateWomen

// // DELETE (woman)
// exports.deleteWomanByID = async (req, res) => {
//   let woman = await con.execute(`DELETE FROM women WHERE ID=${req.query.ID}`);
//   res.send(woman[0]);
// };
// URL:   http://www.localhost:5004/women/deleteWomanByID?ID=
