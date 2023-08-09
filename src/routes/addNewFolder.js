const express = require("express");
const route = express.Router();
const { addNewFolder } = require("../controllers/addNewFolder");

route.post("/", addNewFolder);

module.exports = route;
