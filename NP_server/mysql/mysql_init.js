var mysql = require('mysql');

var pool;

module.exports = {
    mysqlInit() {
        pool = mysql.createPool({
            host: 'localhost',
            user: 'webtest',
            password: 'qwer1234!',
            database: 'potfolio_db',
            charset: 'utf8',
            connectionLimit: 10
        })
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
    }
}