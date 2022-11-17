const { Sequelize } = require("sequelize");
const { user, password, host, database } = require("../utils/config.js");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
// const User = require("../models/User.js");
// const Properties = require("../models/Property.js");

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
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
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false,
          native: false,
        }
      );

//Relacion User => Users => Properties
//    RELACION   // UNO => MUCHOS
// User.BelongsTo(Properties); // 1 a muchos

// Property.hasOne(Publication); // 1 a 1
// Publication.belongsTo(Property); //
// module.exports = {
//     ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//     conn: sequelize // para importart la conexión { conn } = require('./db.js');
// };

module.exports = sequelize;
