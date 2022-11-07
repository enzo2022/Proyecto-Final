const { Sequelize } = require("sequelize");
const { user, password, host, database } = require("../utils/config.js");
console.log(user);
const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:5432/${database}`,
  {
    logging: false,
  }
);

module.exports = sequelize;
