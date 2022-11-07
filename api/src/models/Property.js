const {DataTypes} = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"property",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true
			},
			address: {
				type: DataTypes.STRING,
				defaultValue: false
			},
			surface: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue:
					"https://www.flaticon.com/free-icon/no-photos_2088090?term=no%20photo&page=1&position=1&page=1&position=1&related_id=2088090&origin=search"
			},
			price: {
				type: DataTypes.FLOAT,
				allowNull: false
			},
			environments: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			bathrooms: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			rooms: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			tipoPropiedades: {
				// VARCHAR(255)[]

				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false
			}
		},
		{
			timestamps: false
		}
	);
};
