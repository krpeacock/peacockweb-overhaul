require("dotenv").config();
var proxy = require("express-http-proxy");
var app = require("express")();

app.use("/", proxy(process.env.HOST));

app.listen("8080");
