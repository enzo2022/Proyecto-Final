const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "city",
    {
      idCity: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, createdAt: false, updatedAd: false }
  );
};
