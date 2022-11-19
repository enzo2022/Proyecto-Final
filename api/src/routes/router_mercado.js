const { Router } = require("express");
const { premiumController } = require("../controllers/controller_mercado");

const router = Router();

router.post("/premium", premiumController);

module.exports = router;
