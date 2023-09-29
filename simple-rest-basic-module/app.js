import http from 'node:http';

var httpPort = 8080;

function handler(req, res) {
  var clientIP = req.connection.remoteAddress;
  var connectUsing = req.connection.encrypted ? 'SSL' : 'HTTP';
  console.log('Request received: ' + connectUsing + ' ' + req.method + ' ' + req.url);
  console.log('Client IP: ' + clientIP);

  res.writeHead(200, 'OK', { 'Content-type': 'text/plain' });
  res.write('OK');
  res.end();
  return;
}

function start_callback() {
  console.log('Start HTTP on port ' + httpPort);
}

http.createServer(handler).listen(httpPort, start_callback);
