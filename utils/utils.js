const add = (a, b) => a + b;
const square = x => x * x;

module.exports = {
  add,
  square,
  setName: (user, fullName) => {
    // Set first name and last Nama
    const outUser = Object.assign({}, user);
    fullName.split(' ').map((value, index) => {
      if (index === 0) {
        outUser.firstName = value;
      } else {
        outUser.lastName = value;
      }
    });
    return outUser;
  },
  asyncAdd: (a, b, callback) => {
    setTimeout(() => {
      callback(add(a, b));
    }, 1000);
  },
  asyncSquare: (x, callback) => {
    setTimeout(() => {
      callback(square(x));
    }, 1000);
  }
};