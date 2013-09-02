module.exports = function(app) {
  var User = app.models.user;

  var ContactsController = {
    index: function(req, res) {
      var _id = req.session.user._id

      User.findById(_id, function(error, user){
        var contacts = user.contacts;
        var params = {contacts: contacts};
        res.render('contacts', params);
      });
    },

    new: function(req, res) {
      var user = req.session.user
        , params = {user: user, contact: {name: '', email: ''}};

      res.render('contacts/new', params);
    },

    create: function(req, res) {
      var _id = req.session.user._id;

      User.findById(_id, function(error, user){
        var contact = req.body.contact
          , contacts = user.contacts;

        contacts.push(contact);
        user.save(function() {
          res.redirect('/contacts');
        });
      });
    },

    show: function(req, res, next) {
      var _id = req.session.user._id
      User.findById(_id, function(error, user){
        var contactId = req.params.id
          , contact = user.contacts.id(contactId)
          , params = {contact: contact}
        res.render('contacts/show', params);
      });
    },

    edit: function(req, res) {
      var _id = req.session.user._id
      User.findById(_id, function(error, user){
        var contactId = req.params.id
          , contact = user.contacts.id(contactId)
          , params = {contact: contact}
        res.render('contacts/edit', params);
      });
    },

    update: function(req, res) {
      var _id = req.session.user._id
      User.findById(_id, function(error, user){
        var contactId = req.params.id
          , contact = user.contacts.id(contactId);

        contact.name = req.body.contact.name;
        contact.email = req.body.contact.email;
        user.save(function(){
          res.redirect('/contacts');
        });
      });
    },

    destroy: function(req, res) {
      var _id = req.session.user._id
      User.findById(_id, function(error, user){
        var contactId = req.params.id
        contact = user.contacts.id(contactId).remove();
        user.save(function(){
          res.redirect('/contacts');
        });
      });
    }
  };

  return ContactsController;
};