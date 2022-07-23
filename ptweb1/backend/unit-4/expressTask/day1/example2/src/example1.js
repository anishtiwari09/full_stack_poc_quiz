const express = require("express");
const apt = express();
const user = require("./user");
const uuid = require("uuid");
const usersRouter = require("./routerApi");
const myLogger = require("./middleWare");

apt.use(myLogger);
apt.use(express.urlencoded({extended:false}))
apt.use(express.json());
apt.get("/", (req, res) => {
  return res.send(`<h1>Example-3</h1>`);
});
apt.use("/", usersRouter);
apt.listen(5000, () => {
  console.log("calling...");
});
