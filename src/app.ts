/// <reference path="../typings/tsd.d.ts" />

import http = require("http");

class Server {
    constructor(port: number) {
        var server = http.createServer(function (request: http.IncomingMessage, response: http.ServerResponse) {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Hello World\n");
        });
        
        server.listen(port);
    }
} 

var server = new Server(8000);