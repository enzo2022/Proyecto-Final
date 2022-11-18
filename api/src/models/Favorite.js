const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Favorite",
		{
			id_User: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
			},
			id_Property: {
				type: DataTypes.UUID,
				primaryKey: true,
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
