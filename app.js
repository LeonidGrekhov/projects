const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const routes = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "front-end/build")));
app.use(routes);

module.exports = app;
