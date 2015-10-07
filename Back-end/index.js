'use strict'
let app = require('express')();
let http = require('http');

app.get('/', (req, res) => {
  console.log('GET IT');
  res.end();
});

var server = http.createServer(app);
server.listen(2000, () => {
  
});
//what render template use to set?
// app.set('view engine', );
