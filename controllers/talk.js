module.exports = function(app) {
  var TalkController = {
    index: function(req, res){
      var params = { email: req.params.email};
      res.render('talk/index', params);
    }
  };

  return TalkController;
};