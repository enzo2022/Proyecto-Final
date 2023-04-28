var { Router } = require("express");
var router = Router();

const {
  createMembership,
  getAllMemebership,
} = require("../controllers/memberships.js");

router.post("/membershisp/createMembership", createMembership);
router.get("/membershisp/getAllMembership", getAllMemebership);

module.exports = router;
