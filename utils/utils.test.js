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