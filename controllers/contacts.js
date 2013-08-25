module.exports = function(app) {
  var ContactsController = {
    index: function(req, res) {
      var user = req.session.user
        , params = {user: user};

      res.render('contacts', params);
    },

    new: function(req, res) {
      var user = req.session.user
        , params = {user: user};

      res.render('contacts/new', params);
    },

    create: function(req, res) {
      var contact = req.body.contact
        , user = req.session.user;

      user.contact.push(contact);
      res.redirect('/contact/');
    },

    show: function(req, res) {
      var id = req.params.id
        , contato = req.session.user.contact[id]
        , params = {contact: contact, id: id};

      res.render('contact/show', params);
    },

    edit: function(req, res) {
      var id = req.params.id
        , user = req.session.user
        , contact = user.contact[id]
        , params = {user: user
                  , contact: contact
                  , id: id};
        res.render('contact/edit', params);
    },

    update: function(req, res) {
      var contact = req.body.contact
        , user = req.session.user;
      user.contact[req.params.id] = contact;
      res.redirect('/contacts');
    },

    destroy: function(req, res) {
      var user = req.session.user
        , id = req.params.id;

      user.contact.splice(id, 1);
      res.redirect('/contacts');
    }
  };

  return ContactsController;
};