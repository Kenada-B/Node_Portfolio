var static = require("serve-static");

module.exports = {
    F_static: {
        path: "",
        middleware: static("ejs")
    },
    F_static1: {
        path: "/passport_mysql",
        middleware: static("ejs")
    },
    F_static2: {
        path: "/board_view/",
        middleware: static("ejs")
    },
    F_static3: {
        path: "/board-modify",
        middleware: static("ejs")
    }
}