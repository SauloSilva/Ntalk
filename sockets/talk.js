module.exports = function(io) {
  var crypto = require('crypto')
    , md5 = crypto.createHash('md5')
    , redis = require('redis').createClient()
    , sockets = io.sockets;

  sockets.on('connection', function (client) {
    var session = client.handshake.session
      , user = session.user;

    client.set('email', user.email);

    var onlines = sockets.clients();

    onlines.forEach(function(online) {
      var online = sockets.sockets[online.id];

      online.get('email', function(err, email) {
        client.emit('notify-onlines', email);
        client.broadcast.emit('notify-onlines', email);
      });
    });

    client.on('join', function(room) {
      if(room) {
        room = room.replace('?','');
      } else {
        var timestamp = new Date().toString();
        var md5 = crypto.createHash('md5');
        room = md5.update(timestamp).digest('hex');
      }
      console.log(room)
      client.set('room', room);
      client.join(room);

      console.log('aqui----')

      var msg = "<b>" + user.name + ":</b> entrou.<br>";
      redis.lpush(room, msg, function(error, res) {
        console.log('fez o push===========')
        redis.lrange(room, 0, -1, function(error, msgs){
          msgs.forEach(function(msg){
            console.log(msg);
            sockets.in(room).emit('send-client', msg);
          });
        });
      });
    });

    client.on('disconnect', function () {
      client.get('room', function(error, room) {
        var msg = "<b>"+ user.name +":</b> saiu.<br>";
        redis.lpush(room, msg);
        client.broadcast.emit('notify-offline', user.email);
        sockets.in(room).emit('send-client', msg);
        client.leave(room);
      });
    });

    var session = client.handshake.session
      , user = session.user;

    client.on('send-server', function (msg) {
      var msg = "<b>" + user.name + ":</b> " + msg + "<br>";
      client.get('room', function(error, room) {
        redis.lpush(room, msg);
        var data = {email: user.email, room: room};
        client.broadcast.emit('new-message', data);
        sockets.in(room).emit('send-client', msg);
      });
    });
  });
}