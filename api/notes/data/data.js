var fs = require('fs');

module.exports = {
  getAllNotes: function(){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        fulfill(data);
      });
    });
  },

  searchNotes: function(query){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        var results =[];
        for (var i in data){
          if(data[i].body.indexOf(query) > -1){
            results.push({ "id" : data[i].id, "note" : data[i].body });
          }
        }
        results = JSON.stringify(results);
        fulfill(results);
      });
    });
  },

  saveNote: function(note){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        //TODO search JSON and assign id to greatest value
        data.push({ "id" : (data.length + 1), "body" : note })
        data = JSON.stringify(data);
        fulfill(data);
      });
    });
  },

  getNote: function(id) {
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        for (var i in data){
          if (data[i].id == id){
            data = JSON.stringify(data[i]);
            fulfill(data);
          }
        }
        fulfill(-1);
      });
    });
  },

  deleteNote: function(id){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        for (var i in data){
          if (data[i].id == id){
            data.splice(id, 1);
            data = JSON.stringify(data);
            fulfill(data);
          }
        }
      });
    });
  }

}

//TODO fix id sequence on save, add, delete
//TODO save changes to file
