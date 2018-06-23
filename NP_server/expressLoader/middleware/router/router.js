var express = require('express');

var router = express.Router();

router.route('/').get(function(req, res) {
    context = { title: "index" }
    res.render('index', context, function(err, html) {
        res.writeHead(200, { 'Content-type': 'text/html; utf8' });
        res.end(html);
    })
})

module.exports = {
    F_router: {
        path: '/',
        middleware: router
    }
}