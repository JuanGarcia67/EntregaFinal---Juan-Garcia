require('./http/initialize_server.js')().then(function (server) {
  console.log('Listening on por 3000');
  server.listen(3000);
});