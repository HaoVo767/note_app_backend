const express = require("express");
const route = express.Router();
const addNewNoteController = require("../controllers/addNewNote");

route.post("/", addNewNoteController);

module.exports = route;
