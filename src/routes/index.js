// const express = require('express');
const loginRoute = require("./login");
const registerRoute = require("./register");

const router = (app) => {
  app.use("/login", loginRoute);
  app.use("/register", registerRoute);
};
module.exports = router;
