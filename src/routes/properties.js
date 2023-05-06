const { Router } = require("express");
const router = Router();
const {
  createProperty,
  getAllProperties,
  getAllAddress,
  findPropertyById,
  disableProperty,
  uplaodProperty,
  deleteProperty,
} = require("../controllers/properties.js");

//here
const {
  authenticateToken,
  authorizePremium,
  noAuthorizeLogged,
} = require("../middlewares");

router.post("/create", authenticateToken, authorizePremium, createProperty);

router.get("/all", getAllProperties);
router.get("/getAllAddress", getAllAddress);
router.get("/:id", findPropertyById);

router.put("/disable/:id", disableProperty);
router.put("/:id", uplaodProperty);

router.delete("/:id", authenticateToken, noAuthorizeLogged, deleteProperty);

module.exports = router;
