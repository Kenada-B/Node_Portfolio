var passport = require('../passport/strategy');
var mysql = require('../../../mysql/mysql_init');

module.exports = function(router) {
    router.route('/vue-socket.io').get(function(req, res) {
        context = { title: "vue-socket.io" };
        res.render('V_S', context, function(err, html) {
            res.writeHead(200, { 'Content-type': 'text/html; utf8' });
            res.end(html);
        })
    });
    router.route('/friend-list').get(function(req, res) {
        res.redirect('/vue-socket.io');
    });
    router.route('/messageroom-list').get(function(req, res) {
        res.redirect('/vue-socket.io');
    });
    router.route('/comm-screen/:nothing').get(function(req, res) {
        res.redirect('/vue-socket.io');
    });
}