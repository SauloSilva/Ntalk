module.exports = function(app) {
  var ContactsController = {
    index: function(req, res) {
      var user = req.session.user
        , params = {user: user};

      res.render('contacts/index', params);
    }
  };

  return ContactsController;
};