let express = require('express');
let bodyParser = require('body-parser'); 
let http = require('http');
let fs = require('fs');
 

let app = express();
module.exports.app = app;

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./client'))


app.get('/', function (req, res) {
  res.send('GET request')
})

app.post('/', function (req, res) {
  // convert JSON to CSV and save and send it back
  res.send(req.body);
})

app.listen(3000, function () {
  console.log('App server listening on port: 3000');
})
