const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const Database = require("../Database");

const database = new Database();

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  const token = req.headers["auth-token"];
  const voidness = database.getUser(1);

  jwt.verify(token, SECRET_KEY, (error, userId ) => {
    if (token === "null") {
      console.log(200);
      res.status(200).send(voidness);
    }
    else if (error) {
      console.log(403);
      res.status(403).send();
    } else {
      const user = database.getUser(userId);
      res.status(200).send(user);
    }
  });
});

usersRouter.post("/", (req, res) => {
  if (database.getUserByEmail(req.body.email) !== undefined) {
    res.status(451).send();
  }
  if ( database.getUserByLogin(req.body.login) === undefined ) {
    database.addUser(req.body);

    res.status(201).send();
  }
  else {
    res.status(409).send();
  }
});

usersRouter.get("/:userId", (req, res) => {
  const user = database.getUser(req.params.userId);
  
  res.status(200).send(user);
});

module.exports = usersRouter;
