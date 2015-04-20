var server = require("./server");
var router = require("./router");
var reqHandler = require("./handler");

var handle = {};

handle["/"] = reqHandler.start;
handle["/start"] = reqHandler.start;
handle["/upload"] = reqHandler.upload;

server.startServer(router.route, handle);