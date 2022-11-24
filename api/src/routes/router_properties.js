var { Router } = require("express");
var router = Router();
const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");

//Llamado a properties.controller donde tengo la logica
const controller = require("../controllers/controller_properties.js");

//Create Property
router.post(
  "/properties/createProperty",
  verifyTokenAdminPremiun,
  controller.createProperty
);

//Get all propeties
router.get("/properties/getAll", controller.getAllProperties);

//Get find By id
router.get("/properties/findById/:id", controller.findPropertyById);

//Get all address
router.get("/properties/getAllAddress", controller.getAllAddress);

//logicalDeleteion route
router.put(
  "/properties/disableProperty/:id",
  verifyTokenAdminPremiun,
  controller.disableProperty
);

//Uplaod property
router.put("/properties/uplaodProperty/:id", controller.uplaodProperty);

module.exports = router;
