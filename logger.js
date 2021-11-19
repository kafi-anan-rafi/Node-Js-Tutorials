var url = 'http://mylogger.io/log';

function log(message) {
  // send an HTTP request 
  console.log(message);
}

// exporting log() public
module.exports.log = log;

// exporting in different name 
module.exports.endPoint = url;