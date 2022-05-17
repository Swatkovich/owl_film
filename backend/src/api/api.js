const express = require("express");
const ordersRouter = require("./orders");
const usersRouter = require("./users");
const loginRouter = require("./login");
const messagesRouter = require("./messages")

const apiRouter = express.Router();

apiRouter.use("/Orders", ordersRouter);

apiRouter.use("/Registration", usersRouter);

apiRouter.use("/Login", loginRouter);

apiRouter.use('/Messages', messagesRouter);

module.exports = apiRouter;
