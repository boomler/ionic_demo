// 连接MySQL
var mysql = require('mysql'),
    config = require("./../config");
var conn = mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    port: config.DB_PORT
});
conn.connect();
exports.conn = conn;
