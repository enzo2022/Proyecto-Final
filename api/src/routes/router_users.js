var { Router } = require("express");
var router = Router();

const {
  getUsers,
  validate,
  signUp,
  login,
} = require("../controllers/controller_users");

//Create User
//router.post("/users/creatUser", signUp);

//Validate
router.get("/users/validate", validate);

//Create User
router.post("/users/signUp", signUp);

//login
router.post("/users/login", login);

//Get all User
router.get("/users/allUsers", getUsers);

//login users

module.exports = router;
