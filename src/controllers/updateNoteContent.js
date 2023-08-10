const db = require("../config/connect_db");

const updateNoteContent = (req, res) => {
  const { noteContent, noteId } = req.body;
  db.query(`UPDATE notes SET noteContent = ? WHERE noteId = ?`, [noteContent, noteId], (err) => {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send({ err });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send({ message: "OK" });
    }
  });
};

module.exports = updateNoteContent;
