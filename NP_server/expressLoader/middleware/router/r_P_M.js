var passport = require('../passport/strategy');
var mysql = require('../../../mysql/mysql_init');

module.exports = function(router) {
    router.route('/passport_mysql').get(function(req, res) {
        mysql.getContentList(0, (err, result) => {
            context = { title: "passport_mysql", loginErr: req.flash('login-fail'), sessionId: req.user, contentList: result[1], pagenation: result[0], curPage: 1 }
            res.render('P_M', context, function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            })
        })
    });

    router.route('/passport_mysql/:pagenum').get(function(req, res) {
        mysql.getContentList((parseInt(req.params.pagenum) - 1) * 10, (err, result) => {
            context = { title: "passport_mysql - " + req.params.pagenum, loginErr: req.flash('login-fail'), sessionId: req.user, contentList: result[1], pagenation: result[0], curPage: req.params.pagenum }
            res.render('P_M', context, function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            })
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

    router.route('/board-write').get(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }
        context = { title: "passport_mysql_write", mod: "write" }
        res.render('P_M_write', context, function(err, html) {
            res.writeHead(200, { 'Content-type': 'text/html; utf8' });
            res.end(html);
        })
    });

    router.route('/board-modify/:articleNum').get(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }
        mysql.getContent(req.params.articleNum, (err, result) => {
            context = { title: "passport_mysql_articleModify", mod: "modify", content: result[1], pagenum: req.query.page }
            res.render('P_M_write', context, function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            })
        })
    });

    router.route('/board-writeAction').post(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }

        for (el in req.body) {
            req.body[el] = escape(req.body[el]);
        }

        mysql.addContent(req.body.title, req.body.content, req.user.id, new Date, (err, result) => {
            if (err) {
                res.redirect("/process-error");
            } else {
                res.redirect("/board_view/" + result.insertId);
            }
        })
    });

    router.route('/board-contentModify/:articleNum').post(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }

        for (el in req.body) {
            req.body[el] = escape(req.body[el]);
        }

        mysql.updateContent(req.params.articleNum, req.body.title, req.body.content, (err, result) => {
            if (err) {
                res.redirect("/process-error");
            } else {
                res.redirect("/board_view/" + req.params.articleNum + "?page=" + req.query.page)
            }
        })
    });

    router.route('/board-contentDelete/:articleNum').get(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }

        mysql.deleteContent(req.params.articleNum, (err, result) => {
            if (err) {
                res.redirect("/process-error");
            } else {
                res.redirect("/passport_mysql/1");
            }
        })
    });

    router.route('/board_view/:articleNum').get(function(req, res) {
        mysql.getContent(req.params.articleNum, (err, result) => {
            context = { title: "board_view-" + req.params.articleNum, content: result[1], comment: result[2], pagenum: req.query.page, sessionId: req.user === undefined ? -1 : req.user }
            res.render('P_M_view', context, function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            })
        })
    });

    router.route('/board-commentAction/:articleNum').post(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }

        for (el in req.body) {
            req.body[el] = escape(req.body[el]);
        }

        mysql.addComment(req.params.articleNum, req.body.comment, req.user.id, (err, result) => {
            if (err) {
                res.redirect("/process-error");
            } else {
                res.render('Back', function(err, html) {
                    res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                    res.end(html);
                });
            }
        })
    });

    router.route('/board-commentUpdate/:commentNum').post(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }
        mysql.updateComment(req.params.commentNum, req.body.mod_comment, (err, result) => {
            if (err) {
                res.redirect("/process-error");
            } else {
                res.render('Back', function(err, html) {
                    res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                    res.end(html);
                });
            }
        })
    });

    router.route('/board-commentDelete/:commentNum').get(function(req, res) {
        if (!req.user) {
            res.redirect("/login-fail");
            return;
        }

        mysql.deleteComment(req.params.commentNum, (err, result) => {
            if (err) {
                res.redirect("/process-error");
            } else {
                res.render('Back', function(err, html) {
                    res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                    res.end(html);
                });
            }
        })
    });

    router.route('/login-fail').get(function(req, res) {
        req.logout();
        res.render('LoginFail', function(err, html) {
            res.writeHead(200, { 'Content-type': 'text/html; utf8' });
            res.end(html);
        })
    });

    router.route('/process-error').get(function(req, res) {
        res.render('ProcessError', function(err, html) {
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