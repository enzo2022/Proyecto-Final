const { Router } = require("express");

const admin = require("./admin");
const cities = require("./cities");
const favorites = require("./favorites");
const feedback = require("./feedback");
const interested = require("./interested");
const mercado = require("./mercado");
const membership = require("./memberships");
const properties = require("./properties");
const users = require("./users");

const router = Router();

router.use("/", admin);
router.use("/", cities);
router.use("/", favorites);
router.use("/", feedback);
router.use("/", interested);
router.use("/", mercado);
router.use("/", membership);
router.use("/property", properties);
router.use("/user", users);

module.exports = router;
