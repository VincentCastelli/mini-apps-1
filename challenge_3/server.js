const express = require('express');

const app = express();

app.use(express.static('/public'));

app.get('/', (req, res) => {
  res.send('This is working!');
});

app.post('/', (req, res) => {
  res.send('Post sent!');
});

app.listen(5000, () => {
  console.log('Listening on port 5000:');
});
