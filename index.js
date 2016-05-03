var express = require('express');
var app = express();
//app.use("/css", express.static(__dirname + '/www/css'));
//app.use("/js", express.static(__dirname + '/www/js'));
app.use("/", express.static(__dirname + '/www'));
app.use("/images", express.static(__dirname + '/www/images'));

var http = require('http').Server(app);

var port = process.env.PORT || 3000;

http.listen(port , function(){
  console.log('port: ' , port);
});

var server = new (require(__dirname + '/src/javascript/server/server.js'))(app);
server.init();