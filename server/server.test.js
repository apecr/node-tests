const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');
/* global define, it, describe, before, beforeEach, afterEach, after */

it('Should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect(res => expect(res.body).toInclude({error: 'Page not found.', name: 'Todo App v1.0'}))
    .end(done);
});

it('Should the users get return the myself user', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect(res => expect(res.body).toInclude({name: 'Alberto', age: 32}))
    .end(done);
});
