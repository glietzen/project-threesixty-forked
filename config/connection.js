var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection.apply(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ThreeSixtyDB'
  });
};

connection.connect();
module.exports = connection;