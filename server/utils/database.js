var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "angular_women",
});

module.exports = con.promise();
