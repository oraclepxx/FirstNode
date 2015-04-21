/**
 * Created by xpan on 4/18/15.
 */

var http = require("http");
var url = require("url");

function startServer(route, handle) {
    var server = http.createServer(function (req, resp) {
        var path = url.parse(req.url).pathname;
        //var postData = "";
        //
        //req.setEncoding("utf8");
        //req.addListener("data", function (dataBlock) {
        //    postData = postData + dataBlock;
        //});
        //
        //req.addListener("end", function () {
        //    route(handle, path, resp, postData);
        //});

        //if (req.url == "/upload" && req.method.toLowerCase() == "post") {
        //    var form = new formidable.IncomingForm();
        //    form.parse(req, function (err, fields, files) {
        //        resp.writeHead(200, {'content-type': 'text/plain'});
        //        //resp.write('received upload:\n\n');
        //        //resp.end(util.inspect({fields: fields, files: files}));
        //        fs.readFile(files.upload.path, "binary", function (err, file) {
        //            if (err) {
        //                resp.write("Error");
        //            } else {
        //                resp.write(file, "binary");
        //            }
        //            resp.end();
        //        });
        //    });
        //    return;
        //}

        route(handle, path, req, resp);

    });

    server.listen(8888);

    console.log("Server started.");
}

exports.startServer = startServer;


