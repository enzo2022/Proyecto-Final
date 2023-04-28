const { users } = require("../data/data.json");
const { User } = require("../db");
const { hashPassword } = require("../utils");

require("dotenv").config();
const { ADMIN } = process.env;

async function addUsers() {
  try {
    const MY_ADMIN = JSON.parse(ADMIN)
    const exist = await User.findAll();
    if (!exist?.length) {
      const newUsers = users.map(async (user) => ({
        ...user,
        password: await hashPassword(user.password),
      }));

      const usersWithHashedPasswords = await Promise.all(newUsers);
      await User.bulkCreate([...usersWithHashedPasswords,MY_ADMIN]);
    }
    return "ok → ☼"
  } catch (error) {
    console.log(error.message);
    return "err";
  }
}

module.exports = {
  addUsers,
};
