const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "01663439767",
  database: "note_app",
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
  else {
    console.log("connection success");
  }
});

module.exports = connection;
