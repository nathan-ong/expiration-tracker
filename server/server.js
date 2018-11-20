
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');
var port = 4000;


app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/fetch', function(req, res) {
  db.fetch()
    .then(results => res.send(results));
})

app.post('/save', function(req, res) {
  db.save(req.body);
  res.send('POST request!');
})

app.listen(port, function() {
  console.log(`Listening on ${port}...`)
})