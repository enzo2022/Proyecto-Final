const fs = require("fs");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
const path = require("path");
const { Sequelize } = require("sequelize");

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

//DB-CONNECTION
sequelize
  .authenticate()
  .then(() => console.log("DB-Connected"))
  .catch((err) => console.log(err.message));
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { City, Property, User } = sequelize.models;

// Relationships between the tables
// Product.hasMany(Reviews);

// Relacion 1:M => User => Property
Property.belongsTo(User, { foreignKey: "id_User" });
User.hasMany(Property, { foreignKey: "id_User" });

// Relacion 1:M => City => Property
Property.belongsTo(City, { foreignKey: "idCity" });
City.hasMany(Property, { foreignKey: "idCity" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { City, Property, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
//hola
