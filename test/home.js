var app = require('../app')
  , should = require('should')
  , request = require('supertest')(app);

describe('No controller home', function() {
  it('should 200 in get /', function(done) {
    request.get('/')
      .end(function(err, res) {
        res.status.should.eql(200);
        done();
      });
  });

  it('should render route /exit get', function(done){
    request.get('/exit')
      .end(function(err, res){
        res.headers.location.should.eql('/');
        done();
    });
  });

  it('should login and redirect contacts', function(done){
    var login = {user: {name: 'Teste', email: 'teste@teste'}};
    request.post('/login')
      .send(login)
      .end(function(err, res){
        res.status.should.eql(302)
        res.headers.location.should.eql('/contacts');
        done();
    });
  });

  it('should visit route root in incorrect login', function(done) {
    var login = {user: {name: '', email: ''}};
    request.post('/login')
      .send(login)
      .end(function(err, res) {
        res.headers.location.should.eql('/');
        done();
      });
  });
});


