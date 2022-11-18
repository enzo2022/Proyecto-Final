const axios = require("axios");
const { City } = require("../db");

const getCitiesApiSNDG = async (req, res, next) => {
	try {
		let Url =
			"https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre,%20provincia.nombre&max=5000";
		let cities = await axios.get(Url);
		return cities;
	} catch (err) {
		console.log(err);
	}
};

const UpCities = async (req, res, next) => {
	try {
		let cities = await getCitiesApiSNDG();
		// console.log(cities.data.municipios);
		await Promise.all(
			cities.data.municipios.map(
				async (e) =>
					await City.findOrCreate({
						where: {
							idCity: e.id,
							city: e.nombre,
							provincia: e.provincia.nombre,
						},
					})
			)
		).then(() => console.log("UpCities"));
	} catch (err) {
		console.log(err);
	}
};

const getCities = async (req, res, next) => {
	try {
		let cities = await City.findAll();

		res.status(200).json({ Message: "Succes", payload: cities });
	} catch (err) {
		res.status(400).json({ Error: err.message });
	}
};

const getCitiesApi = async (req, res, next) => {
	try {
		let cities = await getCitiesApiSNDG();
		res.status(200).json({ Message: "Succes", payload: cities.data });
	} catch (err) {
		res.status(400).json({ Error: err.message });
	}
};

module.exports = { getCitiesApi, getCities, UpCities, getCitiesApiSNDG };
