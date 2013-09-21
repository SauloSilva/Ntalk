var mongoose = require('mongoose')
  , singleConnection
  , env_url = {
    "test": "mongodb://localhost/ntalk_test",
    "development": "mongodb://localhost/ntalk"
  };

module.exports = function() {
  var env = process.env.NODE_ENV || 'development'
    , url = env_url[env];

  if(!singleConnection) {
    singleConnection = mongoose.connect(url);
  }
  return singleConnection;
}