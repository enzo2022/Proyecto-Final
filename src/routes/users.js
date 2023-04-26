var { Router } = require("express");
var router = Router();

const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");
const verifyTokenUserLogged = require("../JWT/verifyTokenUserLogged.js");

const {authenticateToken} = require('../middlewares')

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

router.put("/upload/:id_user", authenticateToken, uplaodUser);
router.put("/users/upDate/:id_user", upDate);

router.delete("/:idUser",authenticateToken,  deleteUser);

module.exports = router;
