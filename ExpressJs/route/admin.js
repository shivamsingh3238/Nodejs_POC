const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const route = express.Router();

const product = [];

route.get("/item", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "item.html"));

  //res.render("item", { PageTitle: "Add-Prodcut" });
});

route.post("/test", (req, res, next) => {
  product.push({ title: req.body.title });
  // console.log("this is req.bosy console");
  res.redirect("/");
});

module.exports = {
  routes: route,
  product: product
};
