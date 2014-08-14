
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test_node'
});

connection.connect();
 
exports.showUserInfo = function(callback){
    connection.query('SELECT * FROM member', function(err, rows, fields) {
     if (err) throw err;
 
    callback(rows);
    // for (var i in rows) {
    //     console.log('name: ', rows[i].name);
    // }
});
}

 
exports.insertUserInfo = function(data){
    connection.query('INSERT INTO member (name, age) VALUES (?,?)', [data.name, data.age], function(err, rows, fields) {
    if (err) throw err;
 
    console.log('success insert query');
});
}
 
 
exports.disconnectDB = function(){
    connection.end();
}
 