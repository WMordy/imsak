
 const mysql = require('mysql');

 dbConn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',  
     database: 'imsak'
 });
 dbConn.connect(function (err) {
     if (err) throw err;
     console.log("Database Connected!");
 });
 module.exports = dbConn;