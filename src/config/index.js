const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DATABASE, SECRET_KEY, NODE_ENV, PGDATABASE, PGHOST, PGPORT, PGUSER, PGPASSWORD } = process.env;

if (!DATABASE && !PGDATABASE) {
  throw new Error("No se ha definido una variable de entorno para la base de datos");
}

if (!SECRET_KEY) {
  throw new Error("No se ha definido una variable de entorno para la clave secreta");
}

let sequelize;

if (NODE_ENV === "production") {
  sequelize = new Sequelize({
    database: PGDATABASE || DATABASE,
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
