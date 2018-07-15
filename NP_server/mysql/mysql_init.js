var mysql = require('mysql');

var pool;

module.exports = {
    mysqlInit() {
        pool = mysql.createPool({
            host: 'marudb.ckkge0fproo1.ap-northeast-2.rds.amazonaws.com',
            user: 'node_pot',
            password: 'qwer1234!',
            database: 'potfolio_db',
            charset: 'utf8',
            connectionLimit: 10,
            multipleStatements: true
        })
		pool.query("set time_zone = 'Asia/Seoul'",function(err, results, fields) {});
    },
    getUserinfo(userid, userpw, callback) {
        pool.query('select ?? from user where userid=? and userpw=password(?)', ['userid', userid, userpw], function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else if (results.length !== 1) {
                err = { '-1': 'not collect information' };
                results = undefined;
                callback(err, results);
            } else {
                callback(err, results);
            }
        });
    },
    addContent(title, content, userid, date, callback) {
        query_content = { title: title, content: content, userid: userid, mod_time: date }
        pool.query('insert into board set ?', query_content, function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    updateContent(articlenum, title, content, callback) {
        query_content = { title: title, content: content }
        pool.query('update board set ? where num=?', [query_content, parseInt(articlenum)], function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    getContentList(pagenum, callback) {
        pool.query('select count(*) as count from board; select num, title, userid ,mod_time, view_num from board order by num desc LIMIT ?, 10;', [pagenum], function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    getContent(articlenum, callback) {
        pool.query(`update board set view_num=view_num+1 where num=?
                    ;select num, title, content, userid ,mod_time, view_num from board where num=?
                    ;select num, article_num, comment, userid, mod_time from comment where article_num=?`, [articlenum, articlenum, parseInt(articlenum)], function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    addComment(articlenum, comment, userid, callback) {
        pool.query('insert into comment set ?', { article_num: articlenum, comment: comment, userid: userid }, function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    updateComment(commentnum, comment, callback) {
        pool.query('update comment set ? where num=?', [{ comment: comment }, parseInt(commentnum)], function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    deleteComment(commentnum, callback) {
        pool.query('delete from comment where num=?', [parseInt(commentnum)], function(err, results, fields) {
            if (err) {
                callback(err, results);
            } else {
                callback(err, results);
            }
        })
    },
    deleteContent(articlenum, callback) {
        pool.getConnection(function(err, connection) {
            connection.beginTransaction(function(err) {
                connection.query('delete from comment where article_num=?', [parseInt(articlenum)], function(err, results, fields) {
                    if (err) {
                        callback(err, results);
                        return connection.rollback();
                    }
                    connection.query('delete from board where num=?', [parseInt(articlenum)], function(err, results, fields) {
                        if (err) {
                            callback(err, results);
                            return connection.rollback();
                        }
                        connection.commit();
                        callback(err, results);
                    });
                });
            });
        });
    }
}


/*module.exports.mysqlInit();
for (var i = 0; i < 90; i++) {
    module.exports.addContent('pagenation test' + i, "pagenation testContent" + i, 'maru', new Date(), (err, result) => {

    })
}*/
/*module.exports.getContentList(0, (err, result) => {
    console.dir(result);
});*/