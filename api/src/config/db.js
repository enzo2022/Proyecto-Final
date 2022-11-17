const { Sequelize } = require("sequelize");
const { user, password, host, database } = require("../utils/config.js");
// const User = require("../models/User.js");
// const Properties = require("../models/Property.js");

const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:5432/${database}`,
  {
    logging: false,
  }
);

module.exports = sequelize;
