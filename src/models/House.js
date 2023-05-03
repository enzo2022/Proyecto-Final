const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("House", {
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
    garage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    garden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};
