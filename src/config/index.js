const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DATABASE, SECRET_KEY, NODE_ENV } = process.env;

let sequelize;

if (NODE_ENV === "production") {
  console.log("Production");
  sequelize = new Sequelize(DATABASE, { logging: false, native: false });
} else {
  sequelize = new Sequelize(DATABASE, {
    logging: false,
    native: false,
  });
}

module.exports = {
  sequelize,
  SECRET_KEY,
};
