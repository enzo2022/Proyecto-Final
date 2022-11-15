const router = require("express").Router();
//Llamado a properties.controller donde tengo la logica
const controller = require("../controllers/properties.controller.js");

//CREATE PROPER

router.post("/createProper", controller.createProper)

//CREATE PROPERTIE
router.post("/createProperty", controller.createProperty);

//Get all propeties
router.get("/getAll", controller.getAllProperties);

//Get find By id
router.get("/findById/:id", controller.findPropertyById);

//Post a backend con JSON para ir practicando
router.get("/getAllProperties", controller.fakeProperties);

//Get all address
router.get("/getAllAddress", controller.getAllAddress);

module.exports = router;
