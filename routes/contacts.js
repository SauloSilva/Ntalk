module.exports = function(app) {
  var contacts = app.controllers.contacts;

  app.get('/contacts', contacts.index);
  app.get('/contacts/:id', contacts.show);
  app.post('/contacts', contacts.create);
  app.get('/contacts/:id/edit', contacts.edit);
  app.put('/contacts/:id', contacts.update);
  app.del('/contacts/:id', contacts.destroy);
};