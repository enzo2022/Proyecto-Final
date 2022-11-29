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
          include: [{ model: Favorite }],
        }
      );
    }

    res.status(200).json(sql);
  } catch (error) {
    // Passes errors into the error handler
    return next(error);
  }
};
const deleteFavorite = async (req, res) => {
  const { id_Favorite } = req.params;
  try {
    if (!id_Favorite) return res.send("Id inexistente");
    const deleteFavorite = await Favorite.destroy({
      where: { id_Favorite: id_Favorite },
    });
    res.status(200).json({ Message: "Delete favorite succes" });
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
};
const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();

    if (!favorites.length) throw new Error("No hay favoritos");

    res.status(200).json({ Message: "Success", payload: favorites });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

module.exports = {
  createFavorite,
  favoritesbyId_user,
  deleteFavorite,
  getAllFavorites,
};
//hola
