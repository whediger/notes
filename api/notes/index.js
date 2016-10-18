var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function(req, res){
  fs.readFile('notes.json', 'utf8', function (err, data){
      console.log(data);
      res.end(data);
  });
});


var server =  app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});
