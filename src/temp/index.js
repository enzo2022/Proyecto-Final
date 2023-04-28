const { users } = require("../data/data.json");
const { User } = require("../db");
const { hashPassword } = require("../utils");

require("dotenv").config();
const { ADMIN } = process.env;

async function addUsers() { 
  try {
    if(ADMIN?.length){
      let MY_ADMIN = JSON.parse(ADMIN)
      await addAdmin(MY_ADMIN)
    }

    const exist = await User.findAll();
    if (!exist?.length) {
      const newUsers = users.map(async (user) => ({
        ...user,
        password: await hashPassword(user.password),
      }));

      const usersWithHashedPasswords = await Promise.all(newUsers);
      await User.bulkCreate(usersWithHashedPasswords);
    }
    return "Ok → users added"
  } catch (error) {
    return error.message;
  }
}

async function addAdmin(ADMIN){
  if(!ADMIN) return

  ADMIN.password = await hashPassword(ADMIN.password)
  await User.create(ADMIN)
  return
}

module.exports = {
  addUsers,
};
