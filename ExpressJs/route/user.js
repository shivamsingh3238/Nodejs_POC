const express = require("express");
const path = require("path");

const route = express.Router();

const adminData = require("./admin");

route.get("/", (req, res, next) => {
  // console.log(adminData.product);
  // res.sendFile(path.join(__dirname, "../", "view", "shop.html"));
  const product = adminData.product;
  console.log(product);
  res.render("shop", { item: product, pageTitle: "Shop", path: "/" });
});

module.exports = route;
