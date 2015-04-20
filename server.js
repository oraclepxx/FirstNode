/**
 * Created by xpan on 4/18/15.
 */

var http = require("http");
var url = require("url");

function startServer(route, handle) {
    var server = http.createServer(function (req, resp) {
        var path = url.parse(req.url).pathname;
        route(handle, path, resp);
    });

    server.listen(8888);

    console.log("Server started.");
}

exports.startServer = startServer;


