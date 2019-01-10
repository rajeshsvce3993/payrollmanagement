var mysql = require('mysql');

var con = mysql.createConnection({
  host: "139.59.21.16",
  user: "root",
  password: "srid1809*",
  database: "kga"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
