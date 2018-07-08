var { Nuxt, Builder } = require('nuxt')

var isProd = (process.env.NODE_ENV === 'production');

var config = require('../../nuxt.config.js');
config.dev = !isProd;
var nuxt = new Nuxt(config);

if (config.dev) {
    new Builder(nuxt)
        .build()
}

module.exports = {
    F_nuxt: {
        path: "",
        middleware: nuxt.render
    }
}
