const fs = require('fs') // fs module 

// synchronous methods 
var files = fs.readdirSync('./')
console.log(files);

// asynchronous methods
fs.readdir('$', function (err, files) {
  if (err) console.log('Error', err);
  else console.log("Result", files)
})