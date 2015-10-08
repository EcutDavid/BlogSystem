'use strict'
/* dependencies */
let app = require('express')();
let http = require('http');
let path = require('path');
var morgan = require('morgan');

/* configurations */
app.set('PORT', process.env.PORT || 8000)
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
//hide x-powered-by in header
app.disable('x-powered-by');

console.log(`current production enviroment ${process.env.NODE_ENV}`);
if('debug' === process.env.NODE_ENV){
  app.use(morgan('combined'));
}

/* routers */
app.get('/', (req, res) => {
  console.log('GET IT');
  res.end();
});

let server = http.createServer(app);
server.listen(app.get('PORT'), () => {
  console.log(`Server is running now, listenning at ${app.get('PORT')}`);
});
