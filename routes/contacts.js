module.exports = function(app) {
  var contacts = app.controllers.contacts;
  app.get('/contacts', contacts.index);
};