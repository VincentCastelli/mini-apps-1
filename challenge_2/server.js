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
  // let data = '';
  // res.on('data', (chunk) => {
  //   data += chunk;
  // }).on('end', () => {
  //   res.sendFile('./client/index.html');
  //   res.end();
  // })
})

app.post('/', function (req, res) {
  console.log (req.body);
  res.send('POST request')
})

app.listen(3000, function () {
  console.log('App server listening on port: 3000');
})
