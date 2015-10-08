'use strict'
/* dependencies */
let app = require('express')();
let http = require('http');
let path = require('path');

console.log(`current production enviroment ${process.env.NODE_ENV}`);

/* configurations */
app.set('PORT', process.env.PORT || 8000)
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
//hide x-powered-by in header
app.disable('x-powered-by');
//todo: do I need E tag?

if('production' === process.env.NODE_ENV){
  app.use(function(req, res, next) {
    console.log('%s %s — %s', (new Date).toString(), req.method, req.url);
    return next();
  });
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
