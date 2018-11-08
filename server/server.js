
const express = require('express');
const app = express();
const path = require('path');

var port = 4000;


app.use(express.static(__dirname + '/../client/dist/'));


app.get('/index', function(req, res) {
  res.end('GET request!');
})

app.get('/index', function(req, res) {
  res.end('POST request!');
})

app.listen(port, function() {
  console.log(`Listening on ${port}...`)
})