const axios = require("axios");
const { Property, Publication } = require("../db");

//obetenemos  publicaciones y propiedades
const getAll = async () => {
  return await Publication.findAll({
    include: [
      {
        model: Property,
        attributes: ["id"],
        attributes: ["price"],

        include: [
          /*   {
            model: City,
            attributes: ["name"],
          }, */
          {
            // model: PropertyImage,
            // attributes: ["url", "cloudId"]
          },
          {
            model: Service,
            attributes: ["name"],
          },
        ],
      },
    ],
  });
};

//Aca harcodeao propiedades y publicaciones
const fakePropiedades = [
  {
    Message: "Succes",
    payload: [
      {
        id: "7abfae09-584e-42fe-8627-b51e3065a38f",
        address: "marques 800",
        localidad: "San Isidro",
        surface: 330,
        image:
          "https://res.cloudinary.com/dtzesfyt1/image/upload/v1667936337/Properties/casa6_jbh5lx.jpg",
        price: 14000,
        environments: 3,
        bathrooms: 2,
        rooms: 3,
        tipoPropiedades: "Casa",
      },
      {
        id: "3af33c2e-3a68-4848-89c4-d8731cd4df7c",
        address: "Lisandro de la torre 4510",
        localidad: "Villa Adelina",
        surface: 220,
        image:
          "https://res.cloudinary.com/dtzesfyt1/image/upload/v1667936337/Properties/casa6_jbh5lx.jpg",
        price: 150000,
        environments: 5,
        bathrooms: 3,
        rooms: 4,
        tipoPropiedades: "Casa",
      },
      {
        id: "bda02d9f-1de7-4a68-a831-1b568cd5edcc",
        address: "Mestro Santana 487",
        localidad: "Jose Leon Suarez",
        surface: 50,
        image:
          "https://res.cloudinary.com/dtzesfyt1/image/upload/v1667936337/Properties/departamento4_hkrqru.jpg",
        price: 90000,
        environments: 1,
        bathrooms: 1,
        rooms: 1,
        tipoPropiedades: "Departamento",
      },
      {
        id: "6ea0657d-fce6-463d-9d81-f25a3d10a5f6",
        address: "Pedro de almodobar 4587",
        localidad: "Monte negro",
        surface: 120,
        image:
          "https://res.cloudinary.com/dtzesfyt1/image/upload/v1667936337/Properties/duplex2_gtyrk1.jpg",
        price: 230000,
        environments: 3,
        bathrooms: 1,
        rooms: 2,
        tipoPropiedades: "PH",
      },
      {
        id: "a14d9d4e-6d53-4523-90b3-ddbeeadf28f9",
        address: "Martin de avellaneda 300",
        localidad: "San fernando",
        surface: 320,
        image:
          "https://res.cloudinary.com/dtzesfyt1/image/upload/v1667936337/Properties/departamento2_ee6thj.jpg",
        price: 56000,
        environments: 4,
        bathrooms: 1,
        rooms: 3,
        tipoPropiedades: "Departamento",
      },
    ],
  },
];
const tipoDePropiedades = [
  "Departamento",
  "Local",
  "Estacionamiento",
  "Quincho",
  "Cabaña",
  "Duplex",
  "Oficina",
  "Garage",
  "Oficina",
];

let tipoServicio = ["Luz", "Agua", "Gas", "Internet", "Calefacción"];

module.exports = {
  getAll,
  fakePropiedades,
};
