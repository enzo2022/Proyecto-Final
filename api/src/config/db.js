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

//Relacion User => Users => Properties
//    RELACION   // UNO => MUCHOS
// User.BelongsTo(Properties); // 1 a muchos

// Property.hasOne(Publication); // 1 a 1
// Publication.belongsTo(Property); //
// module.exports = {
// 	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
// 	conn: sequelize // para importart la conexión { conn } = require('./db.js');
// };

module.exports = sequelize;
