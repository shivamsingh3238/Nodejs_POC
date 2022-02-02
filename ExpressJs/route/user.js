const express = require("express");
const path = require("path");

const route = express.Router();

//const adminData = require("./admin");
const procuctController = require("../controllers/add-product");

route.get("/ShowProduct", procuctController.getShowProduct);

route.post("/ShowProduct/:productId", procuctController.getshowproduct);
route.get("/", procuctController.getProduct);

module.exports = route;
