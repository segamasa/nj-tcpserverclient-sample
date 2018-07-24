'use strict';

var net = require('net');

var host = '127.0.0.1';
var port = '42100';

var client = new net.Socket();
client.setEncoding('utf-8');

client.connect(port, host, function() {
  console.log('connected to server');
  // client to server message
  client.write('Hello. Server.');
  console.log('send message');
});

// server to client recieve message.
client.on('data', function(data) {
  console.log('recieve= ' + data);
  if (data == 'success') {
    console.log('send message success.');
    client.destroy();
  }
});

// server connection close.
client.on('close', function() {
  console.log('disconected!');
});

