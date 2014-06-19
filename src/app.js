var swig = require('swig');
var fs = require('fs');
var express = require('express');

var app = express();

app.get('/hello.html', function(req, res){
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

app.get('/', function(req, res) {
  //var html = swig.renderFile(__dirname + '/views/index.html');
  //res.send(html);
  res.send('Hello, Dave.');
});
