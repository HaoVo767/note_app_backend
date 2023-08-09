const loginRoute = require("./login");
const registerRoute = require("./register");
const getFolderRoute = require("./getFolder");
const getNoteRoute = require("./getNote");
const addNewFolderRoute = require("./addNewFolder");

const router = (app) => {
  app.use("/login", loginRoute);
  app.use("/register", registerRoute);
  app.use("/getFolders", getFolderRoute);
  app.use("/getNote", getNoteRoute);
  app.use("/addNewFolder", addNewFolderRoute);
};
module.exports = router;
