var passport = require('../passport/strategy');

module.exports = function(router) {
    router.route('/passport_mysql').get(function(req, res) {
        context = { title: "passport_mysql", loginErr: req.flash('login-fail'), sessionId: undefined }
        if (req.user) context.sessionId = req.user;
        res.render('P_M', context, function(err, html) {
            res.writeHead(200, { 'Content-type': 'text/html; utf8' });
            res.end(html);
        })
    });

    router.route('/local_login').post(passport.authenticate('local-login', {
        successRedirect: '/passport_mysql',
        failureRedirect: '/passport_mysql',
        failureFlash: true
    }));

    router.route('/facebook_login').get(passport.authenticate('facebook_login', {
        scope: 'email'
    }));

    router.route('/facebook-auth').get(passport.authenticate('facebook_login', {
        successRedirect: '/passport_mysql',
        failureRedirect: '/passport_mysql',
    }));

    router.route('/logout').get(function(req, res) {
        req.logout();
        res.redirect('/passport_mysql');
    });
}


//로그인 로컬&페이스북
//비로그인 상태에서 열람 가능
//댓글 테이블 따로 생성
//게시글 지우기에서 트랜잭션 적용
//핵심 코드 열거