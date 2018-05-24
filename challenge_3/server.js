const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.post('/', (req, res) => {
  res.send('Post sent!');
});

app.listen(5000, () => {
  console.log('Listening on port 5000:');
});
