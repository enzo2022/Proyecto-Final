var { Router } = require("express");
var router = Router();
const controller = require("../controllers/controller_interested");

router.post("/interested/userInterested", controller.userInterested);

module.exports = router;
