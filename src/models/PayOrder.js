const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "PayOrder",
    {
      //id autogenerado de las ordenes de pago
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      //id de Pago
      idPage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //id de cliente
      clientId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Link de pago que genera Mercado Pago
      linkPage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //No se que es pero genera con el link de pago
      collectorId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Fecha en que se gnera el voucher
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_User: {
        type: DataTypes.UUID,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAd: false,
    }
  );
};
