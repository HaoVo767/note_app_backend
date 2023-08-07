const loginRoute = require("./login");
const registerRoute = require("./register");
const getFolderRoute = require("./getFolder");
const getNoteRoute = require("./getNote");

const router = (app) => {
  app.use("/login", loginRoute);
  app.use("/register", registerRoute);
  app.use("/getFolders", getFolderRoute);
  app.use("/getNote", getNoteRoute);
};
module.exports = router;
