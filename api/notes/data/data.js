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
        results = JSON.stringify(results, null, "\t");
        fulfill(results);
      });
    });
  },

  saveNote: function(note){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        var newId = 0;
        for (var i in data){
          if (newId < data[i].id)
            newId = data[i].id + 1;
        }
        data.push({ "id" : newId, "body" : note })
        data = JSON.stringify(data, null, "\t");
        fs.writeFile('notes.json', data, function(error){
          if (error){
            console.error('write error: ' + error.message)
          }
        });
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
            data = JSON.stringify(data[i], null, "\t");
            fulfill(data);
          }
        }
        fulfill(-1);
      });
    });
  },

  deleteNote: function(idIn){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        for (var i in data){
          if (data[i].id == idIn){
            data.splice(i, 1);
            data = JSON.stringify(data, null, "\t");
            fs.writeFile('notes.json', data, function(error){
              if (error){
                console.error('write error: ' + error.message)
              }
            });
            fulfill(data);
          } else {
            data = JSON.stringify(data, null, "\t");
            fulfill(data);
          }
        }
      });
    });
  }

}
