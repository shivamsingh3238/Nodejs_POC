const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "view", "item.html"));

  res.render("item", { PageTitle: "Add-Prodcut" });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  // console.log("this is req.bosy console");
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchall((products) => {
    //console.log(products);
    res.render("shop", { item: products, pageTitle: "Shop", path: "/" });
  });
  // console.log(adminData.product);
  // res.sendFile(path.join(__dirname, "../", "view", "shop.html"));
};

exports.getshowproduct = (req, res, next) => {
  const id = req.params.productId;
  Product.productbyid(id, (product) => {
    //console.log(product);
    res.render("show-product", { pageTitle: "Show Product", item: product });
  });
};

exports.getShowProduct = (req, res, next) => {
  Product.fetchall((products) => {
    res.render("show-products", { item: products, pageTitle: "Show Product" });
  });
};

exports.postEditProduct = (req, res, next) => {
  res.render("edit", { pageTitle: "Edit Product" });
};

exports.postDeleteProduct = (req, res, next) => {
  res.render("delete", { pageTitle: "Delete Product" });
};
