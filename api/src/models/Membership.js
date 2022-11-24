const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Membership",
    {
      id_Membership: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      id_User: {
        type: DataTypes.UUID,
      },
      id_Membership_type: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      //Precio ya pagado por el usuario
      payment: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAd: true,
    }
  );
};
