const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const Database = require("../Database");

const database = new Database();

const adminOrdersRouter = express.Router();

adminOrdersRouter.get("/", (req, res) => {
  const orders = database.getOrders();
  
  res.status(200).json(orders);
})

module.exports = adminOrdersRouter;
