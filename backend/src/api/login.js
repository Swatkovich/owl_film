const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const Database = require("../Database");

const database = new Database();

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {

  console.log(database.getUserMessages('Xzo_H8kkL9a-ZF70ooK3D'));
  res.send(database.getUserByLogin('romanpnn'));  
})

loginRouter.post("/", (req, res) => {
  const { login, password } = req.body;

  if ( database.getUserByLogin(login) !== undefined && database.getUserByLogin(login).password === password) {
    const token = jwt.sign(database.getUserByLogin(login).id, SECRET_KEY);
    res.status(200).send(token);
  } else {
    res.status(403).send();
  }
});

module.exports = loginRouter;
