{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":8,"position":8,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":32}},"text":"var express = require('express')"},{"action":"insertText","range":{"start":{"row":0,"column":32},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":25,"column":0}},"lines":["  , routes = require('./routes')","  , user = require('./routes/user')","  , http = require('http')","  , path = require('path');","var app = express();","// all environments","app.set('port', process.env.PORT || 3000);","app.set('views', __dirname + '/views');","app.set('view engine', 'jade');","app.use(express.favicon());","app.use(express.logger('dev'));","app.use(express.bodyParser());","app.use(express.methodOverride());","app.use(app.router);","app.use(require('stylus').middleware(__dirname + '/public'));","app.use(express.static(path.join(__dirname, 'public')));","// development only","if ('development' == app.get('env')) {","  app.use(express.errorHandler());","}","var UserManager = require('./userManager').UserManager;","var userManagerService = new UserManager(app);","http.createServer(app).listen(app.get('port'), function(){","  console.log('Express server listening on port ' + app.get('port'));"]},{"action":"insertText","range":{"start":{"row":25,"column":0},"end":{"row":25,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":32}},"text":"uire('express')"},{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":19}},"text":"requi"},{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":25}},"text":"require(\"\")"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":24}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":24},"end":{"row":0,"column":25}},"text":"x"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":25},"end":{"row":0,"column":26}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":26},"end":{"row":0,"column":27}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":27}},"text":"expr"},{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":30}},"text":"express"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":15},"end":{"row":4,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1407909488344,"hash":"6bde7e55665c8c6be4e9f98ae7d9744b70f594a7"}