const bcrypt = require("bcrypt");

const hasMyPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve([salt, hash]);
    });
  });
};
const saltRounds = 10;

module.exports = {
  hasMyPassword,
};
