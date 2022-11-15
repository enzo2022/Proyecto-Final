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

Property.belongsTo(City, { foreignKey: "idCity" });
City.hasMany(Property, { foreignKey: "idCity" });

module.exports = City;
