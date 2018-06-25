//각 미들웨어 require//
middlewares = {
    router: require('./router/router'),
    static: require('./static')
}

module.exports = function(app) {
    for (F_s in middlewares) {
        for (F_ in middlewares[F_s]) {
            app.use(middlewares[F_s][F_].path, middlewares[F_s][F_].middleware);
        }
    }
}