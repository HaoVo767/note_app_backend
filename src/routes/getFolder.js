const express = require("express");
const route = express.Router();
const { getFolders, getFolderById } = require("../controllers/getFolder");

route.get("/:folderId", getFolderById);
route.get("/", getFolders);

module.exports = route;
