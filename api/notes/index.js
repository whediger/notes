var express = require('express');
var app = express();
var data = require('./data/data.js');


app.get('/api/notes', function(req, res){
  data.getAllNotes().then(function(notes){
    res.end(notes);
  });
});



//TODO remove server config from routes
var server =  app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});
