const { Property } = require("../db.js");
// const {
//   transport,
//   registerMessage,
//   // messageProperties,
// } = require("../utils/nodemailer.js");

//create properties //POST AL FRONT
const createProperty = async (req, res) => {
  try {
    // if (
    //   // !Object.values(req.body).every(Boolean) ||
    //   !images.length ||
    //   !services.length
    // ) {
    //   throw new Error("Faltan completar datos");
    // }
    const properties = await Property.create(req.body);

    // messageProperties(properties);
    res.status(201).json({
      Message: "Propiedad creada",
      payload: properties,
    });
  } catch (err) {
    res.status(401).json({ Error: err.message });
  }
};

//GET ALL PROPERTIES / GET AL FRONT
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.findAll();

    // if (!properties.length && false) throw new Error("No hay propeidades");
    if (!properties.length) throw new Error("No hay propeidades");

    res.status(200).json({ Message: "Success", payload: properties });
    // res.status(200).json({
    //   Message: "Succes",
    //   payload: [...properties, ...require("../utils/fakeProperties.json")],
    // });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//function find by id
const findPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    const searchByPK = await Property.findByPk(id);
    if (!searchByPK) throw new Error("Id inexistente");

    res.status(200).json({ Message: "Succes", paylaod: searchByPK });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const getAllAddress = async (req, res) => {
  try {
    const addressUser = await Property.findAll({
      attributes: ["address"],
    });

    res.status(200).json({ address: addressUser });
  } catch (err) {
    res.status(400).json({ Error: "No hay direcciones en la tabla" });
  }
};

module.exports = {
  createProperty,
  getAllProperties,
  findPropertyById,
  getAllAddress,
};
