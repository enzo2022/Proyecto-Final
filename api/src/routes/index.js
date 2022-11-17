
const { Router } = require("express");
// Importar todos los routers;

const router_cities = require("./router_cities");
const router_users = require("./router_users");
const router_properties = require("./router_properties");

// Configurar los routers
router.use("/", router_cities);
router.use("/", router_users);
router.use("/", router_properties);

module.exports = router;

