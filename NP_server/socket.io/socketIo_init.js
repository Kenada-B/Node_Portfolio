var socketIo = require('socket.io');

module.exports = function(server) {
    io = socketIo.listen(server);
    console.log("Socket.IO 서버 가동");

    var ids = {};

    io.sockets.on('connection', function(socket) {
        socket.on('login', function(data) {
            ids[data.id] = socket.id;
            console.log(data.id + " : " + socket.id)
        });
        socket.on('message', function(data) {
            io.sockets.connected[ids[data.receiver]].emit('message', data);
        })
    })
}