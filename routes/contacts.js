module.exports = function(app) {
  var beforeAuthentication = require('./../middleware/authenticator')
    , contacts = app.controllers.contacts;

  app.get('/contacts', beforeAuthentication, contacts.index);
  app.get('/contact/:id', beforeAuthentication, contacts.show);
  app.get('/contacts/new', beforeAuthentication, contacts.new);
  app.post('/contacts', beforeAuthentication, contacts.create);
  app.get('/contact/:id/edit', beforeAuthentication, contacts.edit);
  app.put('/contact/:id', beforeAuthentication, contacts.update);
  app.del('/contact/:id', beforeAuthentication, contacts.destroy);
};