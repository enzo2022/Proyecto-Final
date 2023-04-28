const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"City",
		{
			idCity: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			city: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			provincia: {
				type: DataTypes.STRING,
				allowNull: true,
			},
		},
		{
			timestamps: false,
			createdAt: false,
			updatedAd: false,
		}
	);
};
