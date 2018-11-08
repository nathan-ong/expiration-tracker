
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

var port = 4000;


app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.get('/index', function(req, res) {
//   res.end('GET request!');
// })

app.post('/index', function(req, res) {
  console.log(req.body);
  res.send('POST request!');
})

app.listen(port, function() {
  console.log(`Listening on ${port}...`)
})