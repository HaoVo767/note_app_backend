const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6639459",
  password: "vwPPaQJFdy",
  database: "sql6639459",
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
  else {
    console.log("connection success");
  }
});

module.exports = connection;
