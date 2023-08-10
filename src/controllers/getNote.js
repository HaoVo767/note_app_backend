const db = require("../config/connect_db");

const getNotes = (req, res) => {
  const { folderId } = req.params;
  db.query(`SELECT * FROM notes WHERE folderId = ? ORDER BY createdAt DESC`, folderId, (err, result) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ message: err.message });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send({ result });
    }
  });
};

const getNoteById = (req, res) => {
  const { folderId, noteId } = req.params;
  db.query("SELECT * FROM notes WHERE folderId = ? AND noteId = ?", [folderId, noteId], (err, result) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ message: err.message });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send({ result });
    }
  });
};

module.exports = { getNotes, getNoteById };
