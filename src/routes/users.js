var { Router } = require("express");
var router = Router();

const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");
const verifyTokenUserLogged = require("../JWT/verifyTokenUserLogged.js");

const {
  signUp,
  signIn,
  getAll,
  uplaodUser,
  upDate,
  findUserById,
  deleteUser,
} = require("../controllers/users.js");

router.post("/signup", signUp);

router.post("/signin", signIn);

//router find Id User
router.get("/users/findByIdUser/:id", findUserById);

//Get all User
router.get("/users/allUsers", getAll);

router.put("/users/upload/:id_user", uplaodUser);

router.put("/users/upDate/:id_user", upDate);

router.delete("/users/delete/:id_User", deleteUser);

module.exports = router;
