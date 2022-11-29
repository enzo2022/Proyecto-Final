var { Router } = require("express");
var router = Router();
const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");
const verifyTokenUserLogged = require("../JWT/verifyTokenUserLogged");

const {
  getAll,
  createUser,
  login,
  uplaodUser,
  upDate,
  findUserById,
  deleteUser
} = require("../controllers/controller_users");

//router find Id User
router.get("/users/findByIdUser/:id", findUserById);

//Create User
router.post("/users/createUser", createUser);

//login
router.post("/users/login", login);

//Get all User
router.get("/users/allUsers", getAll);

router.put("/users/upload/:id_user", uplaodUser);

router.put("/users/upDate/:id_user", upDate);

router.delete("/users/delete/:id_User", deleteUser)

module.exports = router;
