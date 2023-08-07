const db = require("../config/connect_db");

const getFolders = (req, res) => {
  const { authorId } = req.params;
  db.query(`SELECT * FROM folders WHERE authorId = ${authorId}`, (err, result) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ message: err.message });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send({ result });
    }
  });
};
const getFolderById = (req, res) => {
  const { authorId, folderId } = req.params;
  db.query(
    // `SELECT * FROM folders WHERE authorId = ${authorId} AND folderId = ${folderId}`,
    "SELECT * FROM folders WHERE authorId = ? AND folderId = ?",
    [authorId, folderId],
    (err, result) => {
      if (err) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({ message: err.message });
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send({ result });
      }
    }
  );
};
module.exports = {
  getFolders,
  getFolderById,
};
