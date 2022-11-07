//Llamado al JSON de properties
const myJSON = require("../utils/propertiesRent.json");

//Envio el Array harcodeado al front
const getProperties = async (req, res) => {
	try {
		if (myJSON) {
			res.status(200).json(myJSON);
		}
	} catch (err) {
		res.status(400).json({Error: err.message});
	}
};

module.exports = {
	getProperties
};
