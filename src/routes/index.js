const { Router } = require("express");

const router_admin = require("./router_admin");
const router_cities = require("./router_cities");
const router_favorites = require("./router_favorites");
const router_feedback = require("./router_feedback");
const router_interested = require("./router_interested");
const router_mercado = require("./router_mercado");
const router_membership = require("./router_memberships");
const router_properties = require("./router_properties");
const users = require("./users");

const router = Router();

router.use("/", router_admin);
router.use("/", router_cities);
router.use("/", router_favorites);
router.use("/", router_feedback);
router.use("/", router_interested);
router.use("/", router_mercado);
router.use("/", router_membership);
router.use("/", router_properties);
router.use("/user", users);

module.exports = router;
