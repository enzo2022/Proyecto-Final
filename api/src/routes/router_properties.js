var { Router } = require("express");
var router = Router();

//Llamado a properties.controller donde tengo la logica
const controller = require("../controllers/controller_properties.js");

//Create Property
router.post("/properties/createProperty", controller.createProperty);

//Get all propeties
router.get("/properties/getAll", controller.getAllProperties);

//Get find By id
router.get("/properties/findById/:id", controller.findPropertyById);

//Get all address
router.get("/properties/getAllAddress", controller.getAllAddress);

module.exports = router;
