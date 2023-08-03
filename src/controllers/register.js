const db = require("../config/connect_db");

const registerController = (req, res) => {
  const user = req.body;
  db.query("SELECT * FROM users WHERE UserName = ?", user.UserName, (err, result) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ message: "Failed to register" });
    } else {
      if (result.length > 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({ message: "User exist try anothor user name" });
      } else {
        db.query("INSERT INTO users SET ? ", user, (err) => {
          if (err) {
            res.setHeader("Content-Type", "application/json");
            res.status(400).send({ message: "Failed to register" });
          }
          res.setHeader("Content-Type", "application/json");
          res.status(200).send({ message: "Resgister successfully" });
        });
      }
    }
  });
};

module.exports = registerController;
