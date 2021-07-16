const con = require("../utils/database");

// `women`(`ID`, `WomanName`, `DateOfBirth`, `Country`, `Description`, `UserID`);
//  `users`(`ID`, `UserName`, `Email`, `Password`, `createdAt`);

//  CREATE (woman)
exports.insertNewWoman = async (req, res) => {
  let woman = await con.execute(`INSERT INTO women(WomanName, DateOfBirth, Country, Description, UserID) VALUES ('${req.body.WomanName}','${req.body.DateOfBirth}','${req.body.Country}','${req.body.Description}','${req.body.UserID}')`);
  res.send(woman[0]);
};

// READ(rooms);
exports.getWomenByUserID = async (req, res) => {
  let women = await con.execute(`SELECT women.ID,women.WomanName,women.DateOfBirth,women.Country,women.Description,women.UserID, users.UserName FROM women INNER JOIN users ON women.UserID=users.ID WHERE women.UserID=${req.query.UserID}`);
  res.send(women[0]);
};
// SELECT women.ID,women.WomanName,women.DateOfBirth,women.Country,women.Description,women.UserID, users.UserName FROM `women` INNER JOIN users ON women.UserID=users.ID WHERE women.UserID=1
// URL:   http://www.localhost:5004/women/getWomenByUserID?ID=

// UPDATE (woman)
exports.updateWomen = async (req, res) => {
  let woman = await con.execute(`UPDATE women SET WomanName='${req.body.WomanName}', DateOfBirth='${req.body.DateOfBirth}' ,Country='${req.body.Country}' ,Description='${req.body.Description}' WHERE ID=${req.body.ID}`);
  res.send(woman[0]);
};
// URL:   http://www.localhost:5004/women/updateWomen

// DELETE (woman)
exports.deleteWomanByID = async (req, res) => {
  let woman = await con.execute(`DELETE FROM women WHERE ID=${req.query.ID}`);
  res.send(woman[0]);
};
// URL:   http://www.localhost:5004/women/deleteWomanByID?ID=
