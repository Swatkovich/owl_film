const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const Database = require("../Database");

const ordersRouter = express.Router();

const database = new Database();

ordersRouter.post("/", (req, res) => {
   database.addOrder(req.body);
  const orders = database.getOrders();
  res.status(201).send(orders);
});

ordersRouter.get("/", (req, res) => {
  const token = req.headers["auth-token"];

  jwt.verify(token, SECRET_KEY, (error, userId ) => {
    if (error) {
      res.status(403).send();
    }
    const orders = database.getUserOrders(userId);

    res.status(200).send(orders);
  });
});

module.exports = ordersRouter;
