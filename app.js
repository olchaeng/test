var http = require('http');
var qs = require('querystring');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'movie_app'
});

connection.connect();
 
var queryString = 'SELECT * FROM member';
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
 
    for (var i in rows) {
        console.log('Post Titles: ', rows[i].post_title);
    }
});
 
connection.end();

http.createServer(function(request, response) {
  if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 1e6)
                request.connection.destroy();
        });
        request.on('end', function () {
            var post = qs.parse(body);

            console.log(post);
            // use post['blah'], etc.
            response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
            response.end();
        });
    }
    
}).listen(52273, function() {
  console.log('Server running at http://127.0.0.1:52273/');
});