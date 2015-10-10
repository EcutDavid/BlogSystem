const express = require('express');
const path = require('path');
const port = process.env.PORT || 9000
const app = express();

// serve static assets normally
app.use(express.static(path.join(__dirname, '../Front-end/build')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s);.
app.get('*', function (request, response){
  response.type('.html');
  response.sendFile(path.join(__dirname, '../Front-end/build/index.html'));
});

app.listen(port);
console.log("server started on port " + port);
