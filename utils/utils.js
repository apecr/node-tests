module.exports = {
  add: (a, b) => a + b,
  square: x => x * x,
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
  }
};