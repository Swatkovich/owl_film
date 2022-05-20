const express = require("express");
const cors = require("cors");
const path = require("path");

const apiRouter = require("./api/api");
const CLIENT_BULD_PATH = path.join(__dirname, '../../build')

const app = express();

app.use(express.static(CLIENT_BULD_PATH));

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.get('*', (req, res) => {
  this.response.sendFile(path.join(CLIENT_BULD_PATH));
})

app.listen(3001, () => {
  console.log(`Linstening port ${3001}`);
});

module.exports = app;


