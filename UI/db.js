// db.js

const mysql = require('mysql');

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'coding@7',
  database: 'fashionassis'
});

module.exports = pool;
