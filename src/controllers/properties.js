const { Property, User, House, PH, Apartment } = require("../db.js");

const notifier = require("node-notifier");
const path = require("path");
const {
  transport,
  messageForUsersCreateProperty,
} = require("../utils/nodemailer/nodemailer.js");

//POST
const createProperty = async (req, res) => {
  const { idCity, address, images, description, geolocation, idUser, type } =
    req.body;

  const { missing, message } = checkEntriesProperty(req.body);
  if (missing)
    return res.status(400).json({
      error: {
        message,
      },
    });

  try {
    const { idProperty } = await Property.create({
      idCity,
      address,
      images,
      description,
      geolocation,
      idUser,
    });

    const PROPERTY_TYPE = type.type;

    if (PROPERTY_TYPE === "house")
      await House.create({
        ...type,
        idProperty,
      });
    else if (PROPERTY_TYPE === "ph")
      await PH.create({
        ...type,
        idProperty,
      });
    else if (PROPERTY_TYPE === "apartment")
      await Apartment.create({
        ...type,
        idProperty,
      });

    // const { id_User } = req.body;

    // const findUser = await User.findOne({
    //   where: {
    //     id_User: id_User,
    //   },
    // });

    // const email = findUser._previousDataValues.email;
    // const userName = findUser._previousDataValues.userName;

    // const stateMail = await transport.sendMail(
    //   messageForUsersCreateProperty(email, userName)
    // );

    // notify property created succes
    /* notifier.notify(
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
    ); */

    res.status(201).json({
      info: {
        message: "property created successfully",
        idProperty,
        type: PROPERTY_TYPE
      },
    });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

//GET
const getAllProperties = async (req, res) => {
  try {
    const Houses = await House.findAll({
      include: {
        model: Property,
        attributes: { exclude: ["idUser", "idProperty"] },
        include: [{ model: User }],
      },
      attributes: { exclude: ["id"] },
    });

    const PHs = await PH.findAll({
      include: {
        model: Property,
        attributes: { exclude: ["idUser", "idProperty"] },
        include: [{ model: User }],
      },
      attributes: { exclude: ["id"] },
    });

    const Apartments = await Apartment.findAll({
      include: {
        model: Property,
        attributes: { exclude: ["idUser", "idProperty"] },
        include: [{ model: User }],
      },
      attributes: { exclude: ["id"] },
    });
    const properties = [...Houses, ...PHs, ...Apartments];

    if (!properties.length) throw new Error("There isn't properties");

    res.status(200).json({
      info: { message: "success", quantity: properties.length },
      properties,
    });
  } catch (err) {
    res.status(500).json({
      error: {
        message: err.message,
      },
    });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const { idProperty } = req.params;
    const { type } = req.query;

    let property;
    if (type === "house")
      property = await House.findOne({
        where: { idProperty },
        include: {
          model: Property,
          attributes: { exclude: ["idUser", "idProperty"] },
          include: [{ model: User }],
        },
        attributes: { exclude: ["id"] },
      });
    else if (type === "ph")
      property = await PH.findOne({
        where: { idProperty },
        include: {
          model: Property,
          attributes: { exclude: ["idUser", "idProperty"] },
          include: [{ model: User }],
        },
        attributes: { exclude: ["id"] },
      });
    else if (type === "apartment")
      property = await Apartment.findOne({
        where: { idProperty },
        include: {
          model: Property,
          attributes: { exclude: ["idUser", "idProperty"] },
          include: [{ model: User }],
        },
        attributes: { exclude: ["id"] },
      });
    else
      property = await Property.findOne({
        where: { idProperty },
        include: {
          model: User,
        },
        attributes: { exclude: ["idUser"] },
      });

    if (!property)
      return res.status(404).json({ error: { message: `Property not found` } });

    res.status(200).json({
      info: { message: "Succes" },
      property,
    });
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
};

const getAllAddress = async (req, res) => {
  try {
    const addressUser = await Property.findAll({
      attributes: ["address"],
    });

    //Send all address to frontend array string
    let arrAddress = [];
    addressUser.forEach((el) => arrAddress.push(el.toJSON().address));
    res.status(200).json({ Message: arrAddress });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//Borrado logico Property => PUT
const disableProperty = async (req, res) => {
  const { id } = req.params;
  const { state } = req.body;

  try {
    const searchPropertyById = await Property.findByPk(id);

    if (!searchPropertyById) return res.send("Propiedad no encontrada");

    const uploadProperty = await Property.update(
      { ...req.body },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).send({ Message: uploadProperty });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const uplaodProperty = async (req, res) => {
  const { id } = req.params;

  try {
    // let findProperty = await Property.findByPk(id);

    const newUploadProperty = await Property.update(req.body, {
      where: {
        id: id,
      },
    });

    const updatedProperty = req.body;

    if (newUploadProperty[0] === 0) throw new Error("Propiedad inexistente");

    res
      .status(200)
      .json({ Message: "Propiedad actualizada!", payload: updatedProperty });
  } catch (err) {
    res.status(404).json({ Error: err.message });
  }
};

//DELETE
const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) return res.send("Id inexistente");
    const deleteProperty = await Property.destroy({ where: { id: id } });
    res.status(200).json({ Message: "Delete property succes" });
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
};

const checkEntriesProperty = (PROPERTY) => {
  const { idCity, address, images, description, idUser, type } = PROPERTY;
  const entries = {
    comon: ["bedrooms", "bathrooms", "livingRoom", "diningRoom", "kitchen"],
    house: ["garage", "garden"],
    ph: ["garage", "garden", "floors"],
    apartment: ["balcony"],
  };
  if (![idCity, address, images, description, idUser, type].every(Boolean))
    return {
      missing: true,
      message:
        "Missing data → idCity, address, images, description, idUser, type are required",
    };

  for (let i = 0; i < entries.comon.length; i++) {
    if (!type.hasOwnProperty(entries.comon[i])) {
      return {
        missing: true,
        message: `Missing data → ${entries.comon.join(", ")} are required`,
      };
    }
  }

  const PROPERTY_TYPE = type.type;

  if (PROPERTY_TYPE === "house") {
    for (let i = 0; i < entries.house.length; i++) {
      if (!type.hasOwnProperty(entries.house[i])) {
        return {
          missing: true,
          message: `Missing data → ${entries.house.join(", ")} are required`,
        };
      }
    }
  } else if (PROPERTY_TYPE === "ph") {
    for (let i = 0; i < entries.ph.length; i++) {
      if (!type.hasOwnProperty(entries.ph[i])) {
        return {
          missing: true,
          message: `Missing data → ${entries.ph.join(", ")} are required`,
        };
      }
    }
  } else if (PROPERTY_TYPE === "apartment") {
    for (let i = 0; i < entries.apartment.length; i++) {
      if (!type.hasOwnProperty(entries.apartment[i])) {
        return {
          missing: true,
          message: `Missing data → ${entries.apartment.join(
            ", "
          )} are required`,
        };
      }
    }
  }

  return ["house", "ph", "apartment"].includes(PROPERTY_TYPE)
    ? {
        missing: false,
      }
    : {
        missing: true,
        message: `Type property ${PROPERTY_TYPE} no valid`,
      };
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  getAllAddress,
  disableProperty,
  uplaodProperty,
  deleteProperty,
};
