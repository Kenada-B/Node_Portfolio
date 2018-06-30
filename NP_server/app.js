var mysqlInit = require('./mysql/mysql_init');
mysqlInit.mysqlInit();
console.log("mysql 서버 가동");

var mongoInit = require('./mongodb/mongo_init');
mongoInit.mongo_init();
console.log('monogDB 서버 가동');

var httpsConfig = require('./httpsConfig/httpsConfig');
var expressLoader = require('./expressLoader/expressLoader')
var https = require('https');

https.createServer(httpsConfig.sslOption, expressLoader).listen(httpsConfig.port, httpsConfig.host, function() {
    console.log('expressServer httpS 실행됨 - port : ' + httpsConfig.port);
});