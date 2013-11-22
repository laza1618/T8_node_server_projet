var net = require('net');

var HOST = '10.230.130.102';
var PORT = 6969;

var client = new net.Socket();

client.connect(PORT, HOST, function() {
	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
	// Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
	client.write('{"id": {"stnb": "29000628"}}', 'UTF-8', function(){
		console.log("done");
	});
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
	console.log('DATA: ' + data);
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
	console.log('Connection closed');
});
