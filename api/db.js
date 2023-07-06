const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yuto8181nmb",
    database: "blog",
});

module.exports = { db };