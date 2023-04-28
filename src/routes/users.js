var { Router } = require("express");
var router = Router();

const verifyTokenAdminPremiun = require("../JWT/verifyTokenAdminPremiun.js");
const verifyTokenUserLogged = require("../JWT/verifyTokenUserLogged.js");

const {authenticateToken} = require('../middlewares')

const {
  signUp,
  signIn,
  getUser,
  getUsers,
  setPremium,
  updateUser,
  deleteUser,
} = require("../controllers/users.js");

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/all", getUsers);
router.get("/:idUser", getUser);

router.put("/:idUser", authenticateToken, updateUser);
router.put("premium/:idUser", setPremium);

router.delete("/:idUser",authenticateToken,  deleteUser);

module.exports = router;
