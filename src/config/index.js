const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DATABASE, SECRET_KEY, NODE_ENV } = process.env;

let sequelize;

console.log("§↑↓",NODE_ENV);
console.log("PROCESS.ENV", process.env)

if (NODE_ENV === "production") {

  const {PGDATABASE, PGHOST, PGPORT, PGUSER, PGPASSWORD} = process.env

  sequelize = new Sequelize({
    database: PGDATABASE,
    dialect: "postgres",
    host: PGHOST,
    port: PGPORT,
    username: PGUSER,
    password: PGPASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  });
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
