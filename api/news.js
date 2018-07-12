const express = require("express");
const newsData = require("../utils/hackernews-data");

/**
 * News API
 */

const news = express.Router();
news.get("/", (req, res) => {
  newsData
    .fetchStories()
    .then(data => {
      res.json({ data });
    })
    .catch(err => res.json({ err }));
});

module.exports = news;
