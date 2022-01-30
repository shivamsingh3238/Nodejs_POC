const express = require("express");
const path = require("path");

const BodyParser = require("body-parser");
const app = express();

//render html page dynamic and server to user plan/normal html pages
app.set("view engine", "pug");
app.set("views", "view");

const adminData = require("./route/admin");
const userRoute = require("./route/user");

//static path for css file & you can create multiple static path
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "test")));

app.use(BodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
  //res.status(404).render(404);
});

app.listen(3000);
