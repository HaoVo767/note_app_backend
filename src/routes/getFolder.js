const express = require("express");
const route = express.Router();
const { getFolders, getFolderById } = require("../controllers/getFolder");

route.get("/:authorId/:folderId", getFolderById);
route.get("/:authorId", getFolders);

module.exports = route;
