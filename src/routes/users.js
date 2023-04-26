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

router.get("/all", getAll);
router.get("/:idUser", findUserById);

router.put("/users/upload/:id_user", uplaodUser);
router.put("/users/upDate/:id_user", upDate);

router.delete("/:idUser", deleteUser);

module.exports = router;
