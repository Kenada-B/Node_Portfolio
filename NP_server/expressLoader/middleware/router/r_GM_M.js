var passport = require('../passport/strategy');
var mysql = require('../../../mysql/mysql_init');

module.exports = function(router) {
    router.route('/googlemap_mongodb').get(function(req, res) {
        context = { title: "googlemap_mongodb" }
        res.render('GM_M', context, function(err, html) {
            res.writeHead(200, { 'Content-type': 'text/html; utf8' });
            res.end(html);
        })
    });
}

//로그인 로컬&페이스북
//비로그인 상태에서 열람 가능
//댓글 테이블 따로 생성
//게시글 지우기에서 트랜잭션 적용
//핵심 코드 열거