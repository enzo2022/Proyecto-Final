const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");
const Users = require("../models/User.js");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const Property = sequelize.define(
  "Property",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    // id_User: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [
        "https://www.flaticon.com/free-icon/no-photos_2088090?term=no%20photo&page=1&position=1&page=1&position=1&related_id=2088090&origin=search",
      ],
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    environments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    antiquity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floors: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    garage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("Casa", "PH", "Departamento", "Finca"),
      allowNull: false,
    },
    idCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    modality: {
      type: DataTypes.ENUM("Venta", "Alquiler"),
      allowNull: false,
    },
    // state_modality: {
    //   type: DataTypes.ENUM("Alquilado", "Vendida"),
    //   allowNull: false,
    // },
    observation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    services: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    published: {
      type: DataTypes.ENUM("Revision", "Cancelada", "Publicada"),
      allowNull: false,
    },
    geolocation: {
      type: DataTypes.JSON("Latitud", "Longitud"),
      allowNull: true,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      get() {
        if (this.getDataValue(state)) {
          return "Activado";
        } else {
          return "Desactivado";
        }
      },
    },
  },
  {
    timestamps: false,
  }
);

//muchas porpiedades pertenecen a un usuario
Property.belongsTo(Users, { foreignKey: "User_Property", targetKey: "id" }); // 1 a muchos
Users.hasMany(Property, { foreignKey: "User_Property" });

module.exports = Property;

// id_Property: {
//   type: DataTypes.INTEGER,
// },
// id_User: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
// },
