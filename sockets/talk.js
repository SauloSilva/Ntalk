module.exports = function(io) {
  var crypto = require('crypto')
    , md5 = crypto.createHash('md5')
    , sockets = io.sockets;

  sockets.on('connection', function (client) {
    client.on('join', function(room) {
      if(room) {
        room = room.replace('?','');
      } else {
        var timestamp = new Date().toString();
        var md5 = crypto.createHash('md5');
        room = md5.update(timestamp).digest('hex');
      }

      client.set('room', room);
      client.join(room);
    });

    client.on('disconnect', function () {
      client.get('room', function(error, room) {
        client.leave(room);
      });
    });

    var session = client.handshake.session
      , user = session.user;

    client.on('send-server', function (msg) {
      var msg = "<b>" + user.name + ":</b> " + msg + "<br>";
      client.get('room', function(error, room) {
        var data = {email: user.email, room: room};
        client.broadcast.emit('new-message', data);
        sockets.in(room).emit('send-client', msg);
      });
    });
  });
}