const express = require("express");

const app = express();

app.use("/test", (req, res, next) => {
  console.log("this is first midleware");
  res.send("<h1>Hi this is new route</h1>");
});

app.use("/", (req, res, next) => {
  console.log("this is secound midleware");
  res.send("<h1>Hi this is / route</h1>");
  next();
});

app.listen(3000);
