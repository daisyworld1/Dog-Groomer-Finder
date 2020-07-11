var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'GroomMyDog'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM groomers', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectLocation = function(location, callback) {
  connection.query('SELECT * FROM groomers WHERE location_city = ? AND location_state = ?',[location.city, location.state], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.selectLocation = selectLocation;