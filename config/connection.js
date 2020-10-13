// set up connection to mysql

var mysql = require("mysql");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "burgers_db",
        password: "Kkjowqstr1p"
    });

}


connection.connect(function(err){
    if(err) {
    console.error("error connecting: " + err.stack)
    return;
    }
    console.log("connected as id " + connection.threadId)
});

//export connection for the orm.js to use
module.exports = connection;

