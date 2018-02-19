const expect = require('expect');
const utils = require('./utils');

/* global define, it, describe, before, beforeEach, afterEach, after */
it('Should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('Should square 2', () => {
  const res = utils.square(2);
  expect(res).toBe(4).toBeA('number');
});

it('Should expect some values', () => {
  expect(12).toNotBe(11);
  expect({ name: 'andrew' }).toNotEqual({ name: 'Andrew' });
  expect([2, 3, 4]).toExclude(1);
  expect({ name: 'Alberto', age: 32, location: 'Madrid' }).toInclude({age: 32}).toExclude({age: 31});
});

it('Should include the names in the object', () => {
  const user = utils.setName({}, 'Alberto Eyo');
  expect(user).toInclude({firstName: 'Alberto', lastName: 'Eyo'});
});

it('Should add aync two numbers', (done) => {
  utils.asyncAdd(4, 5, (sum) => {
    expect(sum).toBe(9).toBeA('number');
    done();
  });
});

it('Should square async 12 resulting 144', (done) => {
  utils.asyncSquare(12, (square) => {
    expect(square).toBe(144).toBeA('number');
    done();
  });
});