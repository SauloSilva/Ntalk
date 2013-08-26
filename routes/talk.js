module.exports = function(app) {
  var talk = app.controllers.talk;
  app.get('/talk/:email', talk.index);
};