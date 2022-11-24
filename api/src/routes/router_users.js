var { Router } = require("express");
var router = Router();
const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");
const verifyTokenUserLogged = require("../JWT/verifyTokenUserLogged");

const {
  getAll,
  createUser,
  login,
  uplaodUser,
} = require("../controllers/controller_users");

//Create User
router.post("/users/createUser", createUser);

//login
router.post("/users/login", login);

//Get all User
router.get("/users/allUsers", getAll);

router.put("/users/upload/:id_user", uplaodUser);

module.exports = router;
