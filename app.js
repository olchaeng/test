var http = require('http');
var qs = require('querystring');

var dbHelper = require("./databaseHelper.js")


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

            console.log('name : ', post.name);
            console.log('age : ', post.age);
            // use post['blah'], etc.
            response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
            dbHelper.insertUserInfo(post);
            response.end();
        });
    }
    
}).listen(52273, function() {
  console.log('Server running');
});