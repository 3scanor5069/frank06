const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'frank_furt'
});

module.exports = db;
