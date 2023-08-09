const db = require("../config/connect_db");

const addNewFolder = (req, res) => {
  const { id: authorId } = req.user;
  const { folderName } = req.body;
  db.query(`INSERT INTO folders(authorId, folderName) VALUE (${authorId}, '${folderName}') `, (err, result) => {
    if (err) {
      res.setHeader("Content-Type", "application/json", "Accept", "application/json");
      res.status(400).send({ err });
    } else {
      res.setHeader("Content-Type", "application/json", "Accept", "application/json");
      res.status(200).send({ result });
    }
  });
};

module.exports = { addNewFolder };
