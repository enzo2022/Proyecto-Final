const { hashPassword, verifyPassword } = require("./hashPassword");
const {generateToken} = require('./jwt')

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken
};
