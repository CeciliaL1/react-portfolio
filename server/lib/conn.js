const mysql = require('mysql2');

connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "cecilia_lepik",
    password: process.env.SQL_PASS,
    database: "cecilia_portfolio"
});


module.exports = connection;