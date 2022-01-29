const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const route = express.Router();

route.get("/item", (req, res, next) => {
  console.log("this is first midleware");
  res.sendFile(path.join(rootDir, "view", "item.html"));
});

route.post("/test", (req, res, next) => {
  console.log(req.body);
  console.log("this is req.bosy console");
  res.redirect("/");
});

route.use("/", (req, res, next) => {
  res.send("<h1>This is admin universal route</h1>");
});

module.exports = route;
