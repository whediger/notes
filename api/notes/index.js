var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
var data = require('./data/data.js');


app.get('/api/notes', function(req, res){
  if (Object.keys(req.query).length != 0){
    //search notes
    data.searchNotes(req.query.query)
      .then(function(results){
        res.end(results);
      });
  } else {
    //get all notes
    data.getAllNotes().then(function(notes){
      res.end(notes);
    });
  }
});

//create a new note
app.post('/api/notes', function(req, res){
  data.saveNote(req.body.body)
    .then(function(notes){
      res.end(notes);
    });
});

//get an exisisting note
app.get('/api/notes/:id', function(req, res){
  data.getNote(req.params.id)
    .then(function(note){
        res.end(note);
    });
});

//delete an exisiting note: to be restful design
app.get('/api/notes/delete/:id', function(req, res){
  data.deleteNote(req.params.id)
    .then(function(notes){
      res.end(notes);
    });
});

var server =  app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});
