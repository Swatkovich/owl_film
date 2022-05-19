const express = require("express");
const ordersRouter = require("./orders");
const usersRouter = require("./users");
const loginRouter = require("./login");
const messagesRouter = require("./messages");
const adminRouter = require("./admin");
const adminOrdersRouter = require("./adminOrders");

const apiRouter = express.Router();

apiRouter.use("/Orders", ordersRouter);

apiRouter.use("/Registration", usersRouter);

apiRouter.use("/Login", loginRouter);

apiRouter.use('/Messages', messagesRouter);

apiRouter.use('/Admin', adminRouter);

apiRouter.use('/AdminOrders', adminOrdersRouter);

module.exports = apiRouter;
