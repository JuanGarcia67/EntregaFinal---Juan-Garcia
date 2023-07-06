const buildActions = require('./build_actions');
const createServer = require('./create_server.js');

module.exports = async function initializeServer(overrides) {
    var actions = await buildActions(overrides);
    var server = createServer(actions);
    return server;
  };