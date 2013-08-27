module.exports = function(app) {
  var HomeController = {
    index: function(req, res) {
      res.render('home/index');
    },

    login: function(req, res) {
      var query = { email: req.body.user.email };

      User.findOne(query)
        .select('name email')
        .exec(function(erro, user){
          if (usuario) {
            req.session.user = user;
            res.redirect('/contacts');
          } else {
            User.create(req.body.user, function(erro, user) {
              if(erro){
                res.redirect('/');
              } else {
                req.session.user = user;
                res.redirect('/contacts');
              }
            });
          }
        });
    },

    logout: function(req, res) {
      req.session.destroy();
      res.redirect('/');
    }
  };

  return HomeController;
};