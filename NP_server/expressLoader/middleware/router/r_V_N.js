var passport = require('../passport/strategy');
var mysql = require('../../../mysql/mysql_init');

module.exports = function(router) {
    router.route('/vue-nuxt').get(function(req, res) {
        context = { title: "vue-nuxt" };
        res.render('V_N', context, function(err, html) {
            res.writeHead(200, { 'Content-type': 'text/html; utf8' });
            res.end(html);
        })
    });
}