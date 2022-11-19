const { Router } = require("express");
// Importar todos los routers;

const router_cities = require("./router_cities");
const router_users = require("./router_users");
const router_properties = require("./router_properties");
const router_favorites = require("./router_favorites");
const router_mercado = require("./router_mercado");
const router = Router();

// Configurar los routers
router.use("/", router_cities);
router.use("/", router_users);
router.use("/", router_properties);
router.use("/", router_favorites);
router.use("/", router_mercado);

module.exports = router;
