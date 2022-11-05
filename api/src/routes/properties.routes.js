const router = require("express").Router();
//Llamado a properties.controller donde tengo la logica
const controller = require("../controller/properties.controller.js");

//Post a backend con JSON para ir practicando
router.get("/getHouses", controller.getProperties);
//cambie a GET par traerme todas las propiedades

module.exports = router;
