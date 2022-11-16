const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Property",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			id_User: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			area: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			},
			images: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				defaultValue: [
					"https://www.flaticon.com/free-icon/no-photos_2088090?term=no%20photo&page=1&position=1&page=1&position=1&related_id=2088090&origin=search",
				],
			},
			bathrooms: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			environments: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			antiquity: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			floors: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			rooms: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			garage: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			type: {
				type: DataTypes.ENUM("Casa", "PH", "Departamento", "Finca"),
				allowNull: false,
			},
			idCity: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			modality: {
				type: DataTypes.ENUM("Venta", "Alquiler"),
				allowNull: false,
			},
			state_modality: {
				type: DataTypes.ENUM("Alquilado", "Vendida", "Pendiente"),
				allowNull: false,
			},
			services: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			published: {
				type: DataTypes.ENUM("Revision", "Cancelada", "Publicada"),
				allowNull: true,
			},
			geolocation: {
				type: DataTypes.JSON(),
				allowNull: true,
			},
			observation: {
				type: DataTypes.TEXT,
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
