var forever = require('forever-monitor')
  , Monitor = forever.Monitor
  , child = new Monitor('cluster.js', {
    max: 10,
    silent: true,
    killTree: true,
    logFile: 'forever.log',
    outFile: 'app.log',
    errFile: 'error.log'
  });

child.on('exit', function() {
  console.log('Sever is halted');
});

child.start();