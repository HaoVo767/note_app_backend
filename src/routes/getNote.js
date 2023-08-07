const express = require("express");
const route = express.Router();
const { getNotes, getNoteById } = require("../controllers/getNote");

route.get("/:folderId/:noteId", getNoteById);
route.get("/:folderId", getNotes);

module.exports = route;
