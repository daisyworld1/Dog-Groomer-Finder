var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.post('/search', urlencodedParser, function (req, res) {
  console.log('req.body: ',req.body.city);
  items.selectLocation(req.body, function(err, data) {
    if(err) {
      console.log(req.query.id);
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log(req.query.id);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});