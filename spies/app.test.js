const expect = require('expect');
const rewire = require('rewire');
/* global define, it, describe, before, beforeEach, afterEach, after */
const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);
  it('Should call the spy correctly', () => {
    const spy = expect.createSpy();

    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
  describe('#handleSignup', () => {
    it('Should call saveUser with user object', () => {
      const email = 'as@as.as';
      const password = 'myPass';
      app.handleSignup(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
  });
});