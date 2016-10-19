var fs = require('fs');

module.exports = {
  getAllNotes: function(){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function(err, data){
        fulfill(data);
      });
    });
  },

  searchNotes: function(query) {

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
  }

}
