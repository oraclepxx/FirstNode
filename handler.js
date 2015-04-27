/**
 * Created by xpan on 4/18/15.
 */
var exec = require("child_process").exec;
var formidable = require("formidable");
var fs = require("fs");

var imgPath = "";

function start(request, response) {

    //function sleep(millsec) {
    //    var curTime = new Date().getTime();
    //    while (new Date().getTime() - curTime < millsec);
    //}

    //sleep(10000);
    //exec("find /", {timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
    //    //sleep(10000);
    //    response.write(stdout);
    //    response.end();
    //});

    //var body = '<html>' +
    //    '<head>' +
    //    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
    //    '</head>' +
    //    '<body>' +
    //    '<form action="/upload" method="post">' +
    //    '<textarea name="text" rows="20" cols="60"></textarea>' +
    //    '<input type="submit" value="Submit text" />' +
    //    '</form>' +
    //    '</body>' +
    //    '</html>';

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +
        '<input type="submit" value="Upload">' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(request, response) {
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
        console.log(imgPath);
        if(imgPath == ""){
            imgPath = files.upload.path;
        }
        //console.log("upload/imgPath" + imgPath);
        fs.rename(files.upload.path, imgPath);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();

    });
}

function show(request, response) {
    fs.readFile(imgPath, "binary", function (err, file) {
        if (err) {
            response.write("Error");
        } else {
            response.write(file, "binary");
        }
        response.end();
    });
}


exports.start = start;
exports.upload = upload;
exports.show = show;
