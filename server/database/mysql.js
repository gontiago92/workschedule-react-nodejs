const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'dbpass',
    database: 'dbname'
});


connection.execute(
    'SELECT * FROM `events` LEFT JOIN users ON events.belongs_to = users.id WHERE users.id = ?',
    [1],
    function(err, results, fields) {
    return res.send({'events': results}); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    }
);