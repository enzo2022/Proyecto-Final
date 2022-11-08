const {Router} = require("express");
const {Property, Publication} = require("../db");

const {
	getAll,
	fakePropiedades,
	fakePublicacion
} = require("../controllers/publications.controller");

const router = Router();

router.get("/datosPubli", async (req, res, next) => {
	try {
		await Property.bulkCreate(fakePropiedades)
		await Publication.bulkCreate(fakePublicacion);
		res.send("info cargado con éxito . ");
	} catch (error) {
		next(error);
	}
});

router.get("/posteoEjemplo", async (req, res, next) => {
	try {
		const allPubli = await getAll();
		res.status(200).json(allPubli);
	} catch (error) {
		res.status(404).json({message: error});
	}
});

//EN LA SEMANA AGREGAR CRUD DE PUBLICACIONES

module.exports = router;
