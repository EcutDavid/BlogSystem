'use strict'
/* dependencies */
let express = require('express');
let app = express();
let http = require('http');
let path = require('path');
let morgan = require('morgan');
let fs = require('fs');
let favicon = require('serve-favicon');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

/* configurations */
app.set('PORT', process.env.PORT || 8000)
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Front-end/build')));
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

app.use(function(req, res, next) {
  res.end('Not found');
});

let server = http.createServer(app);
server.listen(app.get('PORT'), () => {
  console.log(`Server is running now, listenning at ${app.get('PORT')}`);
});
