const { Property, User } = require("../db.js");
const notifier = require("node-notifier");
const path = require("path");
const {
  transport,
  registerMessageProperty,
} = require("../utils/nodemailer.js");

// const notifier = require("../nodeNotifier/index.js");

//create properties //POST AL FRONT
const createProperty = async (req, res) => {
  try {
    const { id_User } = req.body;
    // if (
    //   // !Object.values(req.body).every(Boolean) ||
    //   !images.length ||
    //   !services.length
    // ) {
    //   throw new Error("Faltan completar datos");
    // }
    const findUser = await User.findOne({
      where: {
        id_User: id_User,
      },
    });
    const properties = await Property.create(req.body);
    const email = findUser._previousDataValues.email;
    const userName = findUser._previousDataValues.userName;

    const stateMail = await transport.sendMail(
      registerMessageProperty(email, userName)
    );

    //notify property created succes
    notifier.notify(
      {
        sound: true,
        wait: true,
        title: `Propiedad creada con exito! `,
        message: "Gracias por confiar en Properties&&you",
        icon: path.join(
          "https://res.cloudinary.com/dg05pzjsq/image/upload/v1669030750/propertiesandyouicon_c9h24a.png"
        ),
      },
      function (err, response) {
        console.log(err, response);
      }
    );

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
