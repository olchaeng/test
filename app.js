var http = require('http');
var qs = require('querystring');

var dbHelper = require("./databaseHelper.js")

var url_insert = '/inserUser';
var url_show = '/showUserInfo';


http.createServer(function(request, response) {
    
    
  console.log('request url : ', request.url);

  if(request.url == url_insert){
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
  }else if(request.url == url_show){
       if (request.method == 'GET') {
           
            response.writeHead(200, "OK", {'Content-Type': 'text/plain'});
            dbHelper.showUserInfo();
            response.end();
       }
  }else{
      
  }
    
  
    
}).listen(52273, function() {
  console.log('Server running');
});