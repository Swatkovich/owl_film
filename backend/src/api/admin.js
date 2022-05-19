const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const Database = require("../Database");

const database = new Database();

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  const users = database.getUsers();
  
  res.status(200).json(users);
})

module.exports = adminRouter;
