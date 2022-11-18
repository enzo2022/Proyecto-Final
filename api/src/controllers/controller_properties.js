const url = require("../Utils/imageUploader");
const cloudinary = require("../Utils/cloudinary");
const { Property } = require("../db.js");



//IMAGE UPLOAD CONFIGURATION
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = function(req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter });

// const {
//   transport,
//   registerMessage,
//   // messageProperties,
// } = require("../utils/nodemailer.js");



//CREAR PROPERTIS CON IMAGE

const addImage = async (req, res) => {
  
  
      const {  image  } =
        req.body;
           res.send("ok Post Image")
        try {
          const propertyImage = await cloudinary.uploader.upload(
            image,
            {
              upload_preset: "propertiesyou",
              public_id: `algo`,
              allowed_formats: ["png", "jpg", "jpeg"],
              file:"file"
            },
            function (error, result) {
              if (error) {
                console.log(error);
              }
              console.log(result);
            }
          );
 
      
      // const newProperties = await product.create({
      //   image: [productImage.url],  --> aca usamos multer 
      // });  
 
      // await p.addProduct(newProduct);
      res.status(200).json({ Message: "Success", payload: propertyImage})
    
      
    
  } catch (error) {
    console.log(error);
  }
  // //console.log(arrayImages)
}


 


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
  addImage,
  upload

};
