// signUp
const router = require("express").Router();

const controller = require("../controllers/user.controller.js");

router.post("/createUser", controller.signUp);

module.exports = router;
