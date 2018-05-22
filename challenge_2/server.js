let express = require('express');
let http = require('http');

let app = express();
module.exports.app = app;
// let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
// module.exports.fullURL = fullUrl;
let defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};
module.exports.headers = defaultCorsHeaders;

app.get('/', function (req, res) {
  res.send('Here is some data!');
})

app.post('/', function (req, res) {
  res.send('Posted to the server!')
})

app.listen(3000, function () {
  console.log('App server listening on port: 3000');
})
