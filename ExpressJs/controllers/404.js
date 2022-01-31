const express = require("express");
const path = require("path");
const app = express();

exports.getError = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../", "view", "404.html"));
  //res.status(404).render(404);
};
