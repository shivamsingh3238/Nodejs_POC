const express = require("express");

const route = express.Router();

route.get("/item", (req, res, next) => {
  console.log("this is first midleware");
  res.send(
    '<form action="/test" method="POST"> <input type="text" name="title"> <button type= "submit">add item</button></form>'
  );
});

route.post("/test", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = route;
