const utils = require('./utils');

it('Should add two numbers', () => {
  const res = utils.add(33, 11);
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}`);
  }
});
it('Should square 2', () => {
  const res = utils.square(2);
  if (res !== 4) {
    throw new Error(`Expected 4, but got ${res}`);
  }
});