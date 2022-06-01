const express = require("express");
const cors = require("cors");
const { v4 } = require('uuid');

const apiRouter = require("./api/api");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});


app.listen(3001, () => {
  console.log(`Linstening port ${3001}`);
});

module.exports = app;
