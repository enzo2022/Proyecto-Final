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
  editUser
} = require("../controllers/controller_users");

//Create User
router.post("/users/createUser", createUser);

//login
router.post("/users/login", login);

//Get all User
router.get("/users/allUsers", getAll);

router.put("/users/upload/:id_user", uplaodUser);

router.put("/users/upDate/:id_user", upDate);

router.put("/users/edit/:id_user", editUser)
module.exports = router;
