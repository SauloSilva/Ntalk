module.exports = function(app) {
  var User = app.models.user;

  var HomeController = {
    index: function(req, res) {
      res.render('home/index');
    },

    login: function(req, res) {
      var query = { email: req.body.user.email };

      User.findOne(query)
        .select('name email')
        .exec(function(erro, user){
          if (user) {
            req.session.user = user;
            res.redirect('/contacts');
          } else {
            User.create(req.body.user, function(erro, user) {
              if(erro){
                console.log('erro');
                res.redirect('/');
              } else {
                console.log('criou');
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