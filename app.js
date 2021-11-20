
const EventEmitter = require('events');
const emitter = new EventEmitter()

// argument name can be anything - agr, e, eventArg
// can use arrow function as callback
emitter.on('messageLogged', (arg) => {
  console.log('Listener Called!', arg)
});

emitter.emit('messageLogged', { id: 1, url: 'http://' }); // event argument