module.exports = function createServer(actions) {
    var handleRequest = require('./handle_request.js');
    var server = require('http').createServer(handleRequest(actions));
    return server;
  };