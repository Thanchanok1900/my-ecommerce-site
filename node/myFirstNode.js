var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var text = q.fname + " " + q.lname;
  res.write(req.url)
  res.end();
})

server.listen(8080);