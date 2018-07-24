'use strict';

var net = require('net');

var port = '42100';

var server = net.createServer(function(conn){
  console.log('tcp server created');

  conn.on('data', function(data){
    console.log('connected from ' + conn.remoteAddress + ':' + conn.remotePort);
    // client to server recieve message.
    console.log('recieve= ' + data);
    // server to client message
    conn.write('success');
  });

  // client connection close.
  conn.on('close', function(){
    console.log('disconnected from ' + conn.remoteAddress + ':' + conn.remotePort);
  });

}).listen(port);

console.log('listen port ' + port);

