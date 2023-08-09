const db = require("../config/connect_db");
const { createToken } = require("../auth/accessToken");

const loginController = (req, res) => {
  const { UserName, Password } = req.body;
  db.query(`SELECT * FROM users WHERE UserName = '${UserName}' AND Password = '${Password}'`, (err, result) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ message: err });
    } else {
      if (result.length == 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send({ message: "username or password incorrect" });
      } else {
        const accessToken = createToken({ UserName, Password, id: result[0].ID });
        res.setHeader("Content-Type", "application/json");
        res.status(200).send({ message: "OK", accessToken, user: { id: result[0].ID, userName: result[0].UserName } });
      }
    }
  });
};

module.exports = loginController;
