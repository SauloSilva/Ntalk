var app = require('../app')
  , should = require('should')
  , request = require('supertest')(app);

describe('controller contacts', function() {
  describe('logged out', function() {
    it('should to root when access to GET /contacts', function(done) {
      request.get('/contacts')
        .end(function(err, res) {
          res.headers.location.should.eql('/');
          done();
      });
    });

    it('should to root when access to GET /contact/:id', function(done) {
      request.get('/contact/1')
        .end(function(err, res) {
          res.headers.location.should.eql('/');
          done();
      })
    });

    it('should to root when GET /contact/1/edit', function(done) {
      request.get('/contact/1/edit')
        .end(function(err, res) {
          res.headers.location.should.eql('/');
          done();
        });
    });

    it('should to root when POST /contact', function(done) {
      request.post('/contacts')
        .end(function(err, res) {
          res.headers.location.should.eql('/');
          done();
        });
    });

    it('should to root when DELETE /contact/1', function(done) {
      request.del('/contact/1')
        .end(function(err, res) {
          res.headers.location.should.eql('/');
          done();
        });
    });

    it('should to root when PUT  /contact/1', function(done) {
      request.put('/contact/1')
        .end(function(err, res) {
          res.headers.location.should.eql('/');
          done();
        });
    });
  });

  describe('logged', function() {
    var login = {user: {name: 'teste', email: 'teste@teste.com'}}
      , contact = {contact: {name: 'teste', email: 'teste@teste.com'}}
      , cookie = {};

    beforeEach(function(done) {
      request.post('/login')
        .send(login)
        .end(function(err, res) {
          cookie = res.headers['set-cookie'];
          done();
        });
    });

    it('should return status 200 in GET /contacts', function(done) {
      var req = request.get('/contacts');
      req.cookies = cookie;
      req.end(function(err, res) {
        res.status.should.eql(200);
        done();
      });
    });

    it('should /contacts in POST /contacts', function(done) {
      var contact = {contact: {name: 'teste', email: 'teste@teste.com'}};
      var req = request.post('contacts');
      req.cookies = cookie;
      req.send(contact).end(function(err, res) {
        res.headers.location.should.eql('contacts');
        done();
      });
    });
  });
});