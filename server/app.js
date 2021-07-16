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

const Customers = require("./routes/customersRoute");
app.use("/customers", Customers);

const Tasks = require("./routes/tasksRoute");
app.use("/tasks", Tasks);

app.listen(5004);
