var Serve_static = require("serve-static");

module.exports = {
    F_static: {
        path: "/",
        middleware: Serve_static("ejs")
    },
    F_static1: {
        path: "/passport_mysql",
        middleware: Serve_static("ejs")
    },
    F_static2: {
        path: "/board_view/",
        middleware: Serve_static("ejs")
    },
    F_static3: {
        path: "/board-modify",
        middleware: Serve_static("ejs")
    },
    F_static4: {
        path: "/googlemap_mongodb",
        middleware: Serve_static('ejs')
    },
    F_static5: {
        path: "",
        middleware: Serve_static('assets')
    }
}