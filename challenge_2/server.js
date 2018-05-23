let express = require('express');
let bodyParser = require('body-parser'); 
let http = require('http');
let fs = require('fs');
 

let app = express();
module.exports.app = app;

app.use(bodyParser.json());
app.use(express.static('./client'))


app.get('/', function (req, res) {
  res.status(200).send('/client/index.html');
})

app.post('/', function (req, res) {
  // convert JSON to CSV and save and send it back
  // res.send('POST Request');
  let csv = (convert(req.body));
  console.log(csv);
  res.status(200).send(csv);
})

app.listen(3000, function () {
  console.log('App server listening on port: 3000');
})

let convert = (obj) => {
  // keys not equal to children ["firstName", "lastName", "county", "city", "role", "sales"]
  let csvArray = [];
  let key = Object.keys(obj).filter( key => key  !== 'children').join(',') + '\n';
    csvArray.push(key);
    //inner recursion; 
    let innerRecurse = function(obj) {
      let tempArray = [];
      for (let key in obj) {
        if (key !== 'children') {
          // push obj[key[i]] to the array
          tempArray.push(obj[key]);
        }
      }
      // append a new line after each pass through an obj 
      csvArray.push(tempArray.join() + '\n');
      // if there are children, invoke recursion on child
      if (obj.children) {
        obj.children.forEach((child) => innerRecurse(child));
      }
    };
    // call innerRecurse
    innerRecurse(obj);
  
    return csvArray.join('');
}