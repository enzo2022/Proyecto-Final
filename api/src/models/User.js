const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      id_User: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      photo: {
        type: DataTypes.STRING,
        defaultValue:
          "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png",
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      user_auth_0: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      rating: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        defaultValue: "1",
      },

      user_type: {
        type: DataTypes.ENUM(
          "admin",
          "userPremiun",
          "userLogged",
          "userNotLogged"
        ),
        defaultValue: "userNotLogged",
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      cellphone: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        get() {
          if (this.getDataValue("state")) {
            return "Activado";
          } else {
            return "Desactivado";
          }
        },
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAd: false,
    }
  );
};
