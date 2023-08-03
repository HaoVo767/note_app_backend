const express = require("express");
const route = express.Router();
const registerController = require("../controllers/register");

route.post("/", registerController);

module.exports = route;
