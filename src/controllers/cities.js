const { City } = require("../db");

const getCities = async (req, res) => {
	try {
		let cities = await City.findAll();

		res.status(200).json({ Message: "Succes", payload: cities });
	} catch (err) {
		res.status(400).json({ Error: err.message });
	}
};

const getCitiesApi = async (req, res) => {
	try {
		let cities = await getCitiesApiSNDG();
		res.status(200).json({ Message: "Succes", payload: cities.data });
	} catch (err) {
		res.status(400).json({ Error: err.message });
	}
};

module.exports = { getCitiesApi, getCities };
