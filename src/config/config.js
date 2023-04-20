const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DATABASE, SECRET_KEY } = process.env;

let sequelize = new Sequelize(DATABASE, {
  logging: false,
  native: false,
});

module.exports = {
  sequelize,
  SECRET_KEY,
};
