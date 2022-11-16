//Llamado al JSON de properties
const myJSON = require("../utils/fakeProperties.json");
const Property = require("../models/Property.js");
const cloudinary = require("../utils/cloudinary")
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

const functionJson = async () => {
  const data = myJSON.map(async (el) => {
    await Property.create(el);
  });
};

//create properties //POST AL FRONT
const createProperty = async (req, res) => {
  // const { images, services } = req.body;
  try {
    // if (
    //   // !Object.values(req.body).every(Boolean) ||
    //   !images.length ||
    //   !services.length
    // ) {
    //   throw new Error("Faltan completar datos");
    // }
    const properties = await Property.create(req.body);

    res.status(201).json({ Message: "Propiedad creada", payload: properties });
  } catch (err) {
    res.status(401).json({ Error: err.message });
  }
};


//CREAR UNA  PROPIEDAD CON LA IMAGEN QUE RECIBE   DEL FRONT..
const createProper = async (req, res) => {
  const { images, id_user,
    address, 
    area, 
    bathrooms, 
    environments,
    antiquity, 
    floors, 
    rooms, 
    garage, 
    price, 
    idCity, 
    description, 
    modality,
    observation, 
    services, 
    geolocation, 
    state,  } = req.body

  try {
    
    const properImage = await cloudinary.uploader.upload(
      images,
      {
        upload_preset: "unlnkewq",
        public_id: `alggo`,
        allowed_formats: ["png", "jpg", "jpeg",]
      },
      function (error, result) {
        if (error) {
          console.log(error)
        }
        console.log(result)
      }
    )
     let newProperty = await Property.create({
      id_user,
      address, 
      area, 
      bathrooms, 
      environments,
      antiquity, 
      floors,
      rooms, 
      garage, 
      price, 
      idCity, 
      description, 
      modality,
      observation, 
      services, 
      geolocation, 
      state,
      image:[properImage.url],
    }) 

    console.log(newProperty)
    return  res.status(200).json({ Message: "Success", payload: properImage })
  }catch(error){
    return  console.log(error)
  }
  

 
}

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
  fakeProperties,
  createProperty,
  getAllProperties,
  findPropertyById,
  getAllAddress,
  functionJson,
  createProper
};
