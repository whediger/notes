var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
var data = require('./data/data.js');

//get all my notes
app.get('/api/notes', function(req, res){
  data.getAllNotes().then(function(notes){
    res.end(notes);
  });
});

//create a new note
app.post('/api/notes', function(req, res){
  // data.saveNote(req.body.note).then(funciton(note){
  //     res.end(note);
  // });
  console.log(req.body.note);
});

//get an exisisting note
app.get('/api/notes/:id', function(req, res){
  // data.getNote(id).then(function(note){
  //       res.end(note);
  // })
  console.log(req.params.id);
  res.end(req.params.id);
});

//search notes



//TODO remove server config from routes
var server =  app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});
