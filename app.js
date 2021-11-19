console.log() // global Object 

setTimeout() // global Object 
clearTimeout() // global Object 

setInterval() // global Object 
clearTimeout() // global Object 

var message = '';

// browser -> window represents global object
window.console.log();
window.setTimeout();

// in Node we have global as global object
global.console.log()
global.setInterval()

console.log(global.message) // undefined 

// because Variables and Functions are scoped to that file/module 
// thats why they are not available to the global object
