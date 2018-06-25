var passport = require('passport');
var mysql = require('../../../mysql/mysql_init');

var LocalStrategy = require('passport-local').Strategy;

passport.use('local-login', new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    passReqToCallback: true
}, function(req, id, pw, done) {
    mysql.getUserinfo(id, pw, (err, result) => {
        if (err) {
            return done(null, false, req.flash('login-fail', 'ID 또는 PW가 일치하지 않습니다.'))
        }
        userInfo = { id: id };
        return done(null, userInfo);
    });
}));

var FacebookStrategy = require('passport-facebook').Strategy;

passport.use('facebook_login', new FacebookStrategy({
    clientID: '540897279645566',
    clientSecret: '87614a389bb6362f8b5f3d44c112a5c3',
    callbackURL: '/facebook-auth'
}, function(accessToken, refreshToken, profile, done) {
    userInfo = { id: profile.displayName };
    done(null, userInfo);
}))

module.exports = passport;