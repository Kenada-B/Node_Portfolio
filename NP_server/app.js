var httpsConfig = require('./httpsConfig/httpsConfig');
var expressLoader = require('./expressLoader/expressLoader')
var https = require('https');

https.createServer(httpsConfig.sslOption, expressLoader).listen(httpsConfig.port, httpsConfig.host, function() {
    console.log('expressServer httpS 실행됨 - port : ' + httpsConfig.port);
});
//