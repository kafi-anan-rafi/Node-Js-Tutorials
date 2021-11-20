
const http = require('http');
const server = http.createServer();

server.on('connection', (socket) => {
  console.log('New Connection...');
});

server.listen(3000);

// This server is an EventEmitter. That means we can use all of the methods of EventEmitter.
// 1. server.on()
// 2. server.addListener()

console.log('Listening on port 3000...');