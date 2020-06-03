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
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.write("Whoops, the page you were looking for cannot be found");
    response.end();
}

function getIndex(response){
    fs.readFile("./index.html", function(error, data){
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.write(data);
        response.end();
    })
}

function getStyles(response){
    fs.readFile("./css/styles.css", function(err, data){
        response.writeHead(200, {"Content-Type" : "text/css"});
        response.write(data);
        response.end();
    });
}

function getDemoJS(response){
    fs.readFile("./javascript/tldr_demo.js", function(err, data){
        response.writeHead(200, {"Content-Type" : "application/javascript"});
        response.write(data);
        response.end();
    });
}

function onRequest(request, response){
    console.log("Request: {0} {1}".format(request.method, request.url));
    if(request.method == "GET" && (request.url == "/" || request.url == "/index.html")){
        getIndex(response);
    }else if(request.method == "GET" && request.url == "/css/styles.css"){
        getStyles(response);
    }else if(request.method == "GET" && request.url == "/javascript/tldr_demo.js"){
        getDemoJS(response);
    }else{
        error404(response);
    }
}

var port = 8080;
http.createServer(onRequest).listen(port);
console.log("Server initialized on port %d", port);