'use strict'
/* dependencies */
let app = require('express')();
let http = require('http');
let path = require('path');

/* configurations */
app.set('PORT', process.env.PORT || 8000)
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

/* routers */
app.get('/', (req, res) => {
  console.log('GET IT');
  res.end();
});

let server = http.createServer(app);
server.listen(app.get('PORT'), () => {
  console.log(`Server is running now, listenning at ${app.get('PORT')}`);
});
