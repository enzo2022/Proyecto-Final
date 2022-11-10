const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

const getHouse = require("./properties.routes");
const { getCity } = require("../controllers/cities.controller");
router.use("/houses", getHouse);
 
router.use("/fake", fakePub);
router.use("/city", getCity);



router.use;
module.exports = router;
