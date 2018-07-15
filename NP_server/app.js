var mysqlInit = require('./mysql/mysql_init');
mysqlInit.mysqlInit();
console.log("mysql Server init");

var mongoInit = require('./mongodb/mongo_init');
mongoInit.mongo_init();
console.log('monogDB Server init');

var httpsConfig = require('./httpsConfig/httpsConfig');
var expressLoader = require('./expressLoader/expressLoader')
var https = require('https');

var server = https.createServer(httpsConfig.sslOption, expressLoader).listen(httpsConfig.port, httpsConfig.host, function() {
    console.log('expressServer httpS excute - port : ' + httpsConfig.port);
});

require('./socket.io/socketIo_init')(server);