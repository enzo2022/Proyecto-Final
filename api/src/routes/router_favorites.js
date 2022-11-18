var { Router } = require("express");
var router = Router();

const {
	createFavorite,
	favoritesbyId_user,
} = require("../controllers/controller_favorites");

//Add Favorites
router.post("/favorites/createFavorite", createFavorite);

//Add Favorites
router.get("/favorites/:id_User", favoritesbyId_user);

module.exports = router;
