const express = require("express");
const path = require("path");

const adminRoute = require("./route/admin");
const userRoute = require("./route/user");

const BodyParser = require("body-parser");
const { join } = require("path");

const app = express();

//startic path for css file & you can create multiple static path
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "test")));

app.use(BodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(3000);
