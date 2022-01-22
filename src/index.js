const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.get('/users', (req, res) => {
    res.send('{ "users": [] }').status(200);
})

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })