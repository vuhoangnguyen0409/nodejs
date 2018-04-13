var http = require('http'); // module http
var url = require('url'); // module url
var fs = require('fs');// module file system
var dt = require('./moduleDate');// create module moduleDate.js

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //-- Read file demofile.html, no file return 404
    var q = url.parse(req.url, true); // parse url
    var qhost = q.host;// host
    var qpathname = q.pathname;// /after host
    var qsearch = q.search;// return after ?
    var qquery = q.query;
    var filename = "." + q.pathname;
    console.log(qquery);// http://localhost:3000/created_file.html?year=2019
    fs.readFile(filename, function(err, data){
      if (err) {
        res.writeHead(404, {'Content-Type':'text/html'});
        return res.end('404 not found');
      }
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    });
}).listen(3000);
