var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  var url = req.url;
  res.write(url);
  res.end();
}).listen(8080);
