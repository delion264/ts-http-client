"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var options = {
    hostname: "127.0.0.1",
    port: 3000,
    method: "GET",
};
console.log("Listening on port ".concat(options.port, "..."));
var req = http.request(options, function (res) {
    var data = "";
    res.on("data", function (chunk) {
        data += chunk;
    });
    res.on("end", function () {
        console.log("".concat(data, "\t").concat(res.statusCode));
    });
});
req.end();
