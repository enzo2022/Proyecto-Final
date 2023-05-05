const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Property",
    {
      idProperty: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      idCity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      geolocation: {
        type: DataTypes.JSON(),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
