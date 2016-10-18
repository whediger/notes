var fs = require('fs');

module.exports = {
  getAllNotes: function(){
    return new Promise(function(fulfill, reject){
      fs.readFile('notes.json', 'utf8', function (err, data){
        fulfill(data);
      });
    });
  }

}
