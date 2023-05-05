var { Router } = require("express");
var router = Router();
const controller = require("../controllers/interested");

router.post("/interested/userInterested", controller.userInterested);

module.exports = router;
