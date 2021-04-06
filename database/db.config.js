
 const mysql = require('mysql');

 dbConn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'rootroot',  
     database: 'imsak'
 });
 dbConn.connect(function (err) {
     if (err) throw err;
     console.log("Database Connected!");
 });
 module.exports = dbConn;