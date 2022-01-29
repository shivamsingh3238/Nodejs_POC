const express = require("express");
const path = require("path");

const adminRoute = require("./route/admin");
const userRoute = require("./route/user");

const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(3000);
