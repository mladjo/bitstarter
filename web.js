var express = require('express');
//var fs = require('fs');

var app = express.createServer(express.logger());

//var file = fs.readFileSync('/home/ubuntu/bitstarter/index.html');

app.get('/', function(request, response) {
response.send('Hello!'); 
 //response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
