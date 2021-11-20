const os = require('os'); // OS Module

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory: ${totalMemory}`);
console.log(`Free momory: ${freeMemory}`);