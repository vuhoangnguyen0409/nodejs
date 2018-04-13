var http = require('http');
var upperCase = require('upper-case');
// install npm package
/*
  npm init
  npm install upper-case
*/

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(upperCase('upper case nguyen'));
  res.end();
}).listen(3001);
