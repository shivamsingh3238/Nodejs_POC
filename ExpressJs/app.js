const express = require("express");

const adminRoute = require("./route/admin");
const userRoute = require("./route/user");

const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Route not Found</h1>");
});

app.listen(3000);
