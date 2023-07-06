module.exports = function handleRequest(actions) {
  return function (req, res) {
    var action, payload;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Cache-Control');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET,OPTIONS');

    return Promise.resolve()
      // Find usecase
      .then(function () {
        action = actions[req.url];
        console.log('action', action);
        if (!action) {
          res.writeHead(404, { 'content-type': 'application/json' });
          res.end('{}');
          return Promise.reject(req.url + ' not found.');
        }
      })

      // Read body
      .then(function () {
        if (typeof req.body != 'undefined') {
          try { payload = JSON.parse(req.body); }
          catch (e) { payload = {}; }
          return Promise.resolve();
        }

        return new Promise(function (resolve) {
          req.body = '';
          req.on('data', function (data) {
            req.body += data.toString();
          });
          req.on('end', function () {
            try { payload = JSON.parse(req.body) }
            catch (e) {
              params = new URLSearchParams(req.body);
              payload = {};
              params.forEach(function (value, key) { payload[key] = value; })
            }
            resolve();
          });
        });
      })

      // Execute action
      .then(function () {
        return action(payload)
          .then(function (response) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
          })
          .catch(function (errors) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(errors));
          });
      })
  }
};