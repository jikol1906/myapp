//Webserver

var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write('<h1 align="center">:0)</h1>');
    res.end();
});


server.listen(80);


