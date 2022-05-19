const express = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants");

const Database = require("../Database");

const messagesRouter = express.Router();

const database = new Database();

messagesRouter.get('/', (req, res) => {
  const token = req.headers["auth-token"];

  jwt.verify(token, SECRET_KEY, (error,  userId ) => {
    if (error) {
      res.status(403).send();
    }

    const messages = database.getUserMessages(userId);
    res.status(200).json(messages);
  });
})

messagesRouter.post('/', (req, res) => {
  const {avatar, message, userId} = req.body;
  database.addMessageToUser(avatar, message, userId);

  res.status(201).send();
})

module.exports = messagesRouter;
