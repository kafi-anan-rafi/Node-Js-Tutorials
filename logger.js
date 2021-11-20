(function (exports, require, module, __filename, __dirname) { // module wrapper function
  // when module is excuted, it wrapped inside a function 
  // actual function is more complicated than this one 

  var url = "http://mylogger.io/log";

  function log(message) {
    // send an HTTP request
    console.log(message);
  }

  module.exports = log;
  exports.log = log // same as module.exports = log
  exports = log // this is wrong because exports is a refrence of module.exports - we can't change that refrence

});