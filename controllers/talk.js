module.exports = function(app) {
  var TalkController = {
    index: function(req, res){
      var params = { email: req.params.email
                      , user: req.session.user};
      console.log(params);
      res.render('talk/index', params);
    }
  };

  return TalkController;
};