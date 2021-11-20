
const EventEmitter = require('events') // event module 

var url = "http://mylogger.io/log";
class Logger extends EventEmitter {
  log(name) {
    // send an HTTP request
    console.log(`My name is ${name}`);

    // Raise Event
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }

}


module.exports = Logger;