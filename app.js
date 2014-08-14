var http = require('http');
var qs = require('querystring');

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
        });
    }
    response.end();
}).listen(52273, function() {
  console.log('Server running at http://127.0.0.1:52273/');
});