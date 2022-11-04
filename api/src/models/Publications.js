const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"publications",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: false
		}
	);
};
