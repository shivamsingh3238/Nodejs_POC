const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("this is secound midleware");
  res.send("<h1>Hi this is from express</h1>");
  next();
});

app.listen(3000);
