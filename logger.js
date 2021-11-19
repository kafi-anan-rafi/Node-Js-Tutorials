var url = 'http://mylogger.io/log';

function log(message) {
  // send an HTTP request 
  console.log(message);
}

// exporting log() public
module.exports = log; // exporting as function not object

// exporting in different name 
// module.exports.endPoint = url; // exporting as Object 