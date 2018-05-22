let express = require('express');


let app = express();
module.exports.app = app;

app.get('/', function (req, res) {
  res.send('This is working!');
})

app.listen(3000, function () {
  console.log('App server listening on port: 3000');
})

