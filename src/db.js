const fs = require("fs");
const path = require("path");
const {sequelize} = require("./config");

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
const {
  City,
  Property,
  User,
  Favorite,
  Feedback,
  Membership,
  MembershipType,
  deleteProperty,
  Interested,
  PayOrder,
  House,
  PH,
  Apartment
} = sequelize.models;

House.belongsTo(Property, { foreignKey: 'idProperty' })
PH.belongsTo(Property, { foreignKey: 'idProperty' })
Apartment.belongsTo(Property, { foreignKey: 'idProperty' })

// Relationships between the tables
// Product.hasMany(Reviews);

// Relacion 1:M => User => Property
Property.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(Property, { foreignKey: "idUser", onDelete: "CASCADE" });

// Relacion 1:M => City => Property
Property.belongsTo(City, { foreignKey: "idCity" });
//City.hasMany(Property, { foreignKey: "idCity" });

// Relacion 1:M => User => Favorite
Favorite.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(Favorite, { foreignKey: "idUser", onDelete: "CASCADE" });

//Relacion 1:M=>Propiedad=>Comentarios
Feedback.belongsTo(Property, { foreignKey: "id", onDelete: "CASCADE" });
Property.hasMany(Feedback, { foreignKey: "id", onDelete: "CASCADE" });

// //Relacion 1:M => User => Membership
Membership.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(Membership, { foreignKey: "idUser", onDelete: "CASCADE" });

//Relacion 1:M=> Membership => membership_type
Membership.belongsTo(MembershipType, { foreignKey: "idMembership_type" });
MembershipType.hasMany(Membership, { foreignKey: "idMembership_type" });

//Relacion 1:M => Propiedad(id) => interesados
Interested.belongsTo(Property, { foreignKey: "id" });
Property.hasMany(Interested, { foreignKey: "id" });

//Relacion de 1:M User => PayOrder { un usuario genera varias ordeners}
PayOrder.belongsTo(User, { foreignKey: "idUser", onDelete: "CASCADE" });
User.hasMany(PayOrder, { foreignKey: "idUser", onDelete: "CASCADE" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { City, Property, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
