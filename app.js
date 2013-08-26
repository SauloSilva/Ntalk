var express = require('express')
  , app = express()
  , load = require('express-load')
  , error = require('./middleware/errors')
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('ntalk'));
app.use(express.session());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.use(error.notFound);
app.use(error.serverError);

load('models')
   .then('controllers')
   .then('routes')
   .into(app);

io.sockets.on('connection', function (client) {
  client.on('send-server', function (data) {
    var msg = "<b>" + data.name + ":</b> " + data.msg + "<br>";
    client.emit('send-client', msg);
    client.broadcast.emit('send-client', msg);
  });
});

server.listen(3000, function(){
  console.log("init application.");
});