const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/public/test.html');
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));