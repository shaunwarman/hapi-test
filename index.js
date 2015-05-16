var Hapi = require('hapi');
var config = require('./config.json');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path: config.baseUrl, 
    handler: function (request, reply) {
       reply('Hello world');
    }
});

// Start the server
server.start();
