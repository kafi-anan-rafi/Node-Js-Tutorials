
const EventEmitter = require('events');

const Logger = require('./logger'); // imported Logger class
const logger = new Logger(); // created object of Logger

// Register listener
logger.on('messageLogged', (arg) => {
  console.log('Listener Called!', arg)
});

logger.log('Mosh Hamedani'); // called log method of Logger class with argument


// Explanation: 

// If you want to raise events in your application to signal that something is happened
// you need to create a class that extends EventEmitter
// with this that class will have all the functionality defiened in EventEmitter
// but we can also add additional functionality 
// in this case we have added log() to log a message
// inside that class when you want to raise an event use this.emit()
// here this refers to Logger class that extends EventEmitter 
// so all the method defined in EventEmitter will also be part of Logger class

// Finally in App module instead of using instance of EventEmitter 
// use instance of custom class we have defined that extends EventEmitter