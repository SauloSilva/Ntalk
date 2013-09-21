var cluster = require('cluster')
  , os = require('os');

if (cluster.isMaster) {
  var cpus = os.cpus().length;

  for(var i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on('listening', function(worker) {
    console.log('Cluster %d connected', worker.process.pid);
  });

  cluster.on('disconnect', function(worker) {
    console.log('Cluster %d disconnected', worker.process.pid);
  });

  cluster.on('exit', function(worker) {
    console.log('Cluster %d exited', worker.process.pid);
  });
} else {
  require('./app');
}