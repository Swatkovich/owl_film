const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT;

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

app.listen(PORT || 3000, () => {
  console.log(`Linstening port ${PORT}`);
});

module.exports = app;

