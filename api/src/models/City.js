const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const Property = require("../models/Property");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const City = sequelize.define(
  "City",
  {
    idCity: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAd: false,
  }
);

City.hasMany(Property, {
  foreignKey: "idCity",
});
Property.belongsTo(City);

// Property.hasMany(User, {
//     foreignKey: "idCity",
// });
// User.belongsTo(Property);

module.exports = City;
