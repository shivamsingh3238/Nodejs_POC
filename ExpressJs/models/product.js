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
};
