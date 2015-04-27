var server = require("./server");
var router = require("./router");
var reqHandler = require("./handler");

var handle = {};
handle["/"] = reqHandler.start;
handle["/start"] = reqHandler.start;
handle["/upload"] = reqHandler.upload;
handle["/show"] = reqHandler.show;

server.startServer(router.route, handle);
