// Set up MYSQL connection
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "faft5hfsw23cpr93",
    password: "aqqgu5mkin4bj69f",
    database: "fjm16ks3oim2znkn",
  });
}

// Make connection
connection.connect(function (err) {
  if (err) {
    console.log("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});
// Export connection
module.exports = connection;
