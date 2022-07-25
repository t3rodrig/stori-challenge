const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const connection = require("./configs/db");
connection();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const newslettersRouter = require("./routes/newsletters");

const app = express();

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes start here
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/newsletters", newslettersRouter);
// catch 404
app.use((req, res, next) => {
    res.status(404).json({message: "not-found"});
});

module.exports = app;
