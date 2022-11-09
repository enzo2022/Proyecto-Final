const {Router} = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

const getHouse = require("./properties.routes");
router.use("/houses", getHouse);

router.use;
module.exports = router;
