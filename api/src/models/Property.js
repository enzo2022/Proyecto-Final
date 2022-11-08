const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const Properties = sequelize.define(
  "properties",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surface: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://www.flaticon.com/free-icon/no-photos_2088090?term=no%20photo&page=1&position=1&page=1&position=1&related_id=2088090&origin=search",
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    environments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoPropiedades: {
      // VARCHAR(255)[]

      // type: DataTypes.STRING,
      allowNull: false,

      type: DataTypes.ENUM("Departamento", "Casa", "PH", "Bungalo"),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Properties;
