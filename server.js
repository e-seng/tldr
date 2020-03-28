#!/usr/bin/env node
var http = require("http");
var fs = require("fs");

String.prototype.format = function(){
    let string = this;

    for(var index in arguments){
        string = string.replace("{" + index + "}", arguments[index]);
    }

    return string;
}

function error404(response){
    response.writeHead(404, {"ContentType" : "text/plain"});
    response.write("Whoops, the page you were looking for cannot be found");
    response.end();
}

function getIndex(response){
    fs.readFile("./index.html", function(error, data){
        response.writeHead(200, {"ContentType" : "text/html"});
        response.write(data);
        response.end();
    })
}

function onRequest(request, response){
    console.log("Request: {0} {1}".format(request.method, request.url));
    if(request.method == "GET" && (request.url == "/" || request.url == "/index.html")){
        getIndex(response);
    }
}

var port = 8080;
http.createServer(onRequest).listen(port);
console.log("Server initialized on port %d", port);