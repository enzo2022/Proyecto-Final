const axios = require("axios");
const { User, Favorite, Property } = require("../db");

const { Op } = require("sequelize");

const createFavorite = async (req, res) => {
	try {
		const favorities = await Favorite.create(req.body);

		res.status(201).json({
			Message: "propiedad Favorito creada",
			payload: favorities,
		});
	} catch (err) {
		res.status(401).json({ Error: err.message });
	}
};

const favoritesbyId_user = async (req, res, next) => {
	try {
		var id_User = req.params.id_User;

		if (id_User) {
			var sql = await User.findByPk(
				id_User,

				{
					attributes: { exclude: ["password"] },
					include: [
						{ model: Favorite, attributes: ["id_Property"] },
					],
				}
			);
		}

		res.status(200).json(sql);
	} catch (error) {
		// Passes errors into the error handler
		return next(error);
	}
};

module.exports = {
	createFavorite,
	favoritesbyId_user,
};
