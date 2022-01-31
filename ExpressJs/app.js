const express = require("express");
const path = require("path");
const app = express();
const BodyParser = require("body-parser");

//render html page dynamic and server to user plan/normal html pages
app.set("view engine", "pug");
app.set("views", "view");

const adminData = require("./route/admin");
const userRoute = require("./route/user");
const errorControllers = require("./controllers/404");

//static path for css file & you can create multiple static path
app.use(express.static(path.join(__dirname, "public"))); //use for css path
//app.use(express.static(path.join(__dirname, "test")));

app.use(BodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(userRoute);

app.use(errorControllers.getError);

app.listen(3000);
