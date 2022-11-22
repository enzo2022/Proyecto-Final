const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Feedback",
    {
      id_Property: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      id_User: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAd: false,
    }
  );
};
