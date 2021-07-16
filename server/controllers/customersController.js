const con = require("../utils/database");

// READ(customers);
exports.getAllCustomers = async (req, res) => {
  let customers = await con.execute(`SELECT * FROM customers`);
  res.send(customers[0]);
};
// URL:   http://www.localhost:5004/customers/getAllCustomers

//  `customers`(`ID`, `CustomerName`, `Occupation`, `Phone`, `Email`)
//  `tasks`(`ID`, `Description`, `IsCompleted`, `CustomerID`, `createdAt`)
