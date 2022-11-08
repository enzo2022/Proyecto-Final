const {DataTypes} = require("sequelize");
//Servicios de tipo = ["Luz", "Agua", "Gas", "Internet", "Calefacción"]
module.exports = (sequelize) => {
	sequelize.define("service", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
};
