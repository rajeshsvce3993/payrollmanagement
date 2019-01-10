var mysql      = require('mysql');
exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rajes',
  database : 'my_project'
});
