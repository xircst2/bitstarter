#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/static', express.static(__dirname + '/static'));

//var data = fs.readFileSync('index.html', {'flag':'r'});
var data = '';
var rs = fs.createReadStream('index.html',{encoding:'utf-8'});
rs.on('data',function(trunk) {
  data += trunk.toString('utf8');
});

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
