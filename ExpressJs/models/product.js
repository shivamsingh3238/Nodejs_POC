const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "product.json"
);
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    this.id = Math.random().toString();
    fs.readFile(p, (err, fileData) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileData);
      }

      console.log(products);
      products.push(this);
      console.log(products);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchall(cb) {
    let products;
    fs.readFile(p, (err, fileData) => {
      if (err) {
        cb([]);
      } else {
        products = JSON.parse(fileData);
        cb(products);
      }
    });
  }

  static productbyid(id, cb) {
    let product;
    fs.readFile(p, (err, filedata) => {
      product = JSON.parse(filedata);
      const prodId = product.find((prod) => prod.id === id);
      cb(prodId);
    });
  }
};
