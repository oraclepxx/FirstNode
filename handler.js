/**
 * Created by xpan on 4/18/15.
 */
var exec = require("child_process").exec;


function start(response) {
    console.log("handling /start");

    //function sleep(millsec) {
    //    var curTime = new Date().getTime();
    //    while (new Date().getTime() - curTime < millsec);
    //}

    //sleep(10000);
    exec("ls -lah", {timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
        //sleep(10000);
        response.write(stdout);
        response.end();
    });

    //response.write("Request start");
    //response.end();
}

function upload(response) {
    console.log("handling /upload");
    response.write("Request upload");
    response.end();
}


exports.start = start;
exports.upload = upload;
