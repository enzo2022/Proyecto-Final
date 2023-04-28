const { Router } = require("express");
const { premiumController } = require("../controllers/controller_mercado");

const router = Router();

router.post("/payments", premiumController);

module.exports = router;
