const router = require("express").Router();
const controller = require("../controller/properties.controller.js");
//JSON with houses

router.post("/getHouses", controller.getProperties);

module.exports = router;
