// set up connection to mysql

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: "burger_db",
    password: "Kkjowqstr1p"
});

connection.connect(function(err){
    if(err) {
    console.error("error connecting: " + err.stack)
    return;
    }
    console.log("connected as id " + connection.threadId)
});

//export connection for the orm.js to use
module.exports = connection;

