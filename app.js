var http = require('http');
var qs = require('querystring');

var dbHelper = require("./databaseHelper.js")

var url_insert = '/insertUser';
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
           
            response.writeHead(200, "OK", {'Content-Type': 'application/json'});
            
            
            
            var member =[];
            dbHelper.showUserInfo(function(rows){
                for (var i in rows) {
                    var userData = {name:rows[i].name, age:rows[i].age};
                    // userData.name =rows[i].name;
                    // userData.age =rows[i].age;
                    // console.log('name: ', rows[i].name);
                    console.log('name: ', rows[i].name);
                    member.push(userData);
                }
                
                var json = JSON.stringify({ 
                    member: member, 
                    result: "success"
                });
                response.end(json);
            });
            
       }
  }else{
      response.writeHead(200, "unexpected request", {'Content-Type': 'text/plain'});
      response.end();
  }
    
  
    
}).listen(52273, function() {
  console.log('Server running');
});