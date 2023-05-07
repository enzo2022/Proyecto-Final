const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Apartment",
    {
      type: {
        type: DataTypes.STRING,
        defaultValue: "apartment"
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      livingRoom: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      diningRoom: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      kitchen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      balcony: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
