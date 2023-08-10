const loginRoute = require("./login");
const registerRoute = require("./register");
const getFolderRoute = require("./getFolder");
const getNoteRoute = require("./getNote");
const addNewFolderRoute = require("./addNewFolder");
const addNewNoteRoute = require("./addNewNote");
const updateNoteContentRoute = require("./updateNoteContent");

const router = (app) => {
  app.use("/login", loginRoute);
  app.use("/register", registerRoute);
  app.use("/getFolders", getFolderRoute);
  app.use("/getNote", getNoteRoute);
  app.use("/addNewFolder", addNewFolderRoute);
  app.use("/addNewNote", addNewNoteRoute);
  app.use("/updateNoteContent", updateNoteContentRoute);
};
module.exports = router;
