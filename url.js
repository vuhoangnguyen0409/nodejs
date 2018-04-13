var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  var u = req.url; // after domain name
  var q = url.parse(u, true).query;// query return object {year: 2019, ,month: 4}
  var txt = q.year +' '+ q.month; //http://localhost:8080/vnexpress?year=2019&month=4
  res.write(txt);
  res.end();
}).listen(8080);
