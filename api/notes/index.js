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
  // data.saveNote(req.body.note)
    // .then(funciton(note){
    //   res.end(note);
    // });
  console.log(req.body.note);
});

//get an exisisting note
app.get('/api/notes/:id', function(req, res){
  // data.getNote(id)
  //   .then(function(note){
  //       res.end(note);
  //   });
  console.log(req.params.id);
  res.end(req.params.id);
});

//delete an exisiting note: to be restful design
app.get('/api/notes/delete/:id', function(req, res){
  // data.deleteNote(req.params.id)
  //   .then(function(notes){
  //     res.end(notes);
  //   });
  console.log(req.params.id);
});




//TODO remove server config from routes
var server =  app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});
