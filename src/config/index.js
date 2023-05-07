const { Sequelize } = require("sequelize");
require("dotenv").config();

const {LOCAL_DATABASE, DATABASE, SECRET_KEY, NODE_ENV, PORT } = process.env;

let sequelize;

if (NODE_ENV === "production") {
  console.log("Production");
  console.log(PORT);
  sequelize = new Sequelize(DATABASE, { logging: false, native: false });
} else {
  console.log("Desarrollo");
  sequelize = new Sequelize(LOCAL_DATABASE, {
    logging: false,
    native: false,
  });
}

module.exports = {
  sequelize,
  SECRET_KEY,
};
