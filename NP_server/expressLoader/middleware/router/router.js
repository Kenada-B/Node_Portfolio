var express = require('express');

var router = express.Router();

router.route('/').get(function(req, res) {
    context = { title: "Maru Developer" }
    res.render('index', context, function(err, html) {
        res.writeHead(200, { 'Content-type': 'text/html; utf8' });
        res.end(html);
    })
})

router.route('/introduction').get(function(req, res) {
    context = { title: "introduction" }
    res.render('introduction', context, function(err, html) {
        res.writeHead(200, { 'Content-type': 'text/html; utf8' });
        res.end(html);
    })
})

require('./r_P_M')(router);
require('./r_GM_M')(router);
require('./r_V_S')(router);
require('./r_V_N')(router);

module.exports = {
    F_router: {
        path: '/',
        middleware: router
    }
}