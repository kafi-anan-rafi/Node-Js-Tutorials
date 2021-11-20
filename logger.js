
const EventEmitter = require('events') // event module 
const emitter = new EventEmitter(); // object of event module is created

var url = "http://mylogger.io/log";
function log(message) {
  // send an HTTP request
  console.log(message);
}

// Handling Event / Register a listener
emitter.on('logging', (args) => {
  console.log('Listener Called', args);
})

// Raise Event
emitter.emit('logging', {data: 'message'})

exports.log = log;