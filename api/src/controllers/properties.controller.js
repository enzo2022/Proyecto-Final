//Llamado al JSON de properties
const myJSON = require("../utils/fakeProperties.json");
const Properties = require("../models/Property.js");

//Envio el Array harcodeado al front
const fakeProperties = async (req, res) => {
  try {
    if (myJSON) {
      res.status(200).json(myJSON);
    }
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//create properties //POST AL FRONT
const createProperty = async (req, res) => {
  const { tipoPropiedades } = req.body;
  try {
    if (!Object.values(req.body).every(Boolean) || !tipoPropiedades.length) {
      throw new Error("Faltan completar datos");
    }
    const properties = await Properties.create(req.body);

    res.status(201).json({ Message: "Propiedad creada", payload: properties });
  } catch (err) {
    res.status(401).json({ Error: err.message });
  }
};

//GET ALL PROPERTIES / GET AL FRONT
const getAllProperties = async (req, res) => {
  try {
    const properties = await Properties.findAll();
    if (!properties.length) throw new Error("No hay propeidades");
    res.status(200).json({ Message: "Succes", payload: properties });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const findPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("Id inexistente");
    const searchByPK = await Properties.findByPk(id);

    res.status(200).json({ Message: "Succes", paylaod: searchByPK });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
module.exports = {
  fakeProperties,
  createProperty,
  getAllProperties,
  findPropertyById,
};

// !surface ||
// !image ||
// !price ||
// !enviroments ||
// !bathrooms ||
// !rooms ||
// !rooms ||
// tipoPropiedades.length
// !address ||
