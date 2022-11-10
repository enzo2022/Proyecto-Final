var { Router } = require("express");
var router = Router();

//Destructuring de cities_controller donde tengo la logica
const { getCitiesApi, getCities } = require("../controllers/cities.controller");

//Get all Cities
router.get("/cities/Api", getCitiesApi);
router.get("/cities", getCities);

module.exports = router;
