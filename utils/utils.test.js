const expect = require('expect');
const utils = require('./utils');

it('Should add two numbers', () => {
  const res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});
it('Should square 2', () => {
  const res = utils.square(2);
  expect(res).toBe(4).toBeA('number');
});