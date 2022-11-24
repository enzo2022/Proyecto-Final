var { Router } = require("express");
var router = Router();

const controller = require("../controllers/controller_memberships.js");

router.post("/membershisp/createMembership", controller.createMembership);

console.log("CAMBIANDO ALGO");
module.exports = router;
