const express = require("express");
const route = express.Router();
const updateNoteContentController = require("../controllers/updateNoteContent");

route.post("/", updateNoteContentController);

module.exports = route;
