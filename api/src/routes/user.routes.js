// signUp
const router = require("express").Router();

const controller = require("../controllers/user.controller.js");

router.post("/creatUser", controller.signUp);

module.exports = router;
