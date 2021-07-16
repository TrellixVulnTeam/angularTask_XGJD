const con = require("../utils/database");

// READ(user);
exports.getUserByEmail = async (req, res) => {
  let user = await con.execute(`SELECT * FROM users WHERE users.Email='${req.query.Email}' AND users.Password='${req.query.Password}'`);
  res.send(user[0]);
};
// URL:   http://www.localhost:5004/users/getUserByEmail?Email='emailAddress'&Password='password'

// `women`(`ID`, `WomanName`, `DateOfBirth`, `Country`, `Description`, `UserID`);
//  `users`(`ID`, `userName`, `Email`, `Password`, `createdAt`);
