var fs = require('fs');

exports.host = '0.0.0.0';
exports.port = '443'
exports.sslOption = {
    key: fs.readFileSync('./key/key.pem'),
    cert: fs.readFileSync('./key/cert.pem')
}