
// EventEmitter naming convension indicates its a - Class
const EventEmitter = require('events');

const emitter = new EventEmitter() // creating instance/object of EventEmitter class

// Emit means - making a noise or procuce something
// Emit used to raise an event

// 1. Register Listener
// emitter.addListener & emitter.on are same
emitter.on('messageLogged', function () {
  console.log('Listener Called!')
});

// 2. Raise Event
emitter.emit('messageLogged');

// Order is important
// Register listener should place before Raise Event