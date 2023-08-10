const db = require("../config/connect_db");

const addNewNote = (req, res) => {
  const { folderId, noteContent } = req.body;
  db.query(`INSERT INTO notes(noteContent, folderId) VALUE ('${noteContent}', '${folderId}')`, (err) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ err });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send({ message: "OK" });
    }
  });
};

module.exports = addNewNote;
