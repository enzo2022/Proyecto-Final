var { Router } = require("express");
var router = Router();
const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");
const verifyTokenUserLogged = require("../JWT/verifyTokenUserLogged");

const {
  getUsers,
  createUser,
  login,
  prueba,
  pruebados,
} = require("../controllers/controller_users");

//Create User
router.post("/users/createUser", createUser);

//login
router.post("/users/login", login);

//verify-token
router.post("/users/verifytoken", verifyTokenAdminPremiun, prueba);

//verify-toke-user not logged
router.post("/users/userLogged", verifyTokenUserLogged, pruebados);

//Get all User
router.get("/users/allUsers", getUsers);

module.exports = router;
