let express = require('express');
let http = require('http');

let app = express();
module.exports.app = app;

app.use(express.static('./client'))

app.get('/', function (req, res) {
  res.send('Here is some data!');
})

app.post('/', function (req, res) {
  res.send('Posted to the server!')
})

app.listen(3000, function () {
  console.log('App server listening on port: 3000');
})
