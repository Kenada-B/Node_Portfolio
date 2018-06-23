var static = require("serve-static");
var path = require("path");

module.exports = {
    F_static: {
        path: "",
        middleware: static("ejs")
    }
}