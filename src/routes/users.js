var { Router } = require("express");
var router = Router();
const {authenticateToken,authorizeAdmin} = require('../middlewares')

const {
  signUp,
  signIn,
  getUserById,
  getUsers,
  setState,
  updateUser,
  setPremium,
  deleteUser,
} = require("../controllers/users.js");

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/all", getUsers);
router.get("/:idUser", getUserById);

router.put("/state/:idUser", authenticateToken,authorizeAdmin, setState)
router.put("/premium/:idUser", setPremium);
router.put("/:idUser", authenticateToken, updateUser);

router.delete("/:idUser",authenticateToken,  deleteUser);

module.exports = router;
