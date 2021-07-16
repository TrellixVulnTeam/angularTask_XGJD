const express = require("express");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors(corsOptions));

const Users = require("./routes/usersRoute.js");
app.use("/users", Users);

const Women = require("./routes/womenRoute.js");
app.use("/women", Women);

app.listen(5004);
