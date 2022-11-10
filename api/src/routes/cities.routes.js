const router = require("express").Router();
const controller = require("../controllers/cities.controller");

router.get("/city", controller.getCity);

module.exports = router;
