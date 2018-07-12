const express = require("express");
const app = express();
const server = require("http").Server(app);
const newsAPI = require("./api/news");

// Set environment variables
require("dotenv").config();

const { PORT } = process.env;
const port = PORT || 5001;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use("/api/news", newsAPI);

exports.server = server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
