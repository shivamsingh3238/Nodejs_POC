const express = require("express");
const path = require("path");

//const rootDir = require("../util/path");
const procuctController = require("../controllers/add-product");

const route = express.Router();

route.get("/item", procuctController.getAddProduct);

route.post("/test", procuctController.postAddProduct);

route.post("/DeleteProduct", procuctController.postDeleteProduct);
route.post("/EditProduct", procuctController.postEditProduct);
module.exports = {
  routes: route
};
