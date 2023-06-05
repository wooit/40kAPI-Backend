const mysql = require('mysql2');
require('dotenv').config({ path: `.env.local`, override: true });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    database:  process.env.DB_NAME,
    password:  process.env.DB_PASSWORD
});

module.exports = pool.promise();