const express = require("express");
const cors = require("cors");

const apiRouter = require("./api/api");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.listen(3001, () => {
  console.log(`Linstening port ${3001}`);
});

module.exports = app;
