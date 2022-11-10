const axios = require("axios");
const e = require("express");
const { City } = require("../models/City");

const getCity = async (req, res) => {
  try {
    const localidades = await axios.get(
      "https://apis.datos.gob.ar/georef/api/localidades"
    );
    const name1 = await localidades.data.localidades.map((e) => {
      City.findOrCreate({
        where: {
          city: e.localidad_censal.nombre,
          provincia: e.provincia.nombre,
        },
        default: {
          city: e.localidad_censal.nombre,
          provincia: e.provincia.nombre,
        },
      });
    });
    res.status(200).json({ message: "succses", payload: name1 });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getCity,
};
