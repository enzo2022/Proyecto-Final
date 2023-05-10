module.exports = {
  PropertyType: {
    HOUSE: "house",
    PH: "ph",
    APARTMENT: "apartment",
    RANCH: "ranch",
  },
  requiredPropertyEntries: {
    common: [
      "address",
      "idCity",
      "description",
      "photos",
      "bedrooms",
      "bathrooms",
      "squareMeters",
      "yearBuilt",
      "type",
    ],
    house: ["garage"],
    ph: ["floorNumber", "balcony"],
    apartment: ["floorNumber", "balcony"],
    ranch: ["acreage", "barn"],
  },
  checkRequiredPropertyEntries: (PROPERTY) => {
    const { idCity, address, images, description, idUser, type } = PROPERTY;
    const { common, house, ph, apartment, ranch } =
      this.requiredPropertyEntries;
    
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
  },
};

/*
    state: string, // Estado o provincia donde se encuentra la propiedad
    zip_code: string, // Código postal de la propiedad
    price: number, // Precio de venta o alquiler de la propiedad
*/
/*
{
    common:{
        idProperty:string, // Identificación única de la propiedad
        address:string, // Dirección de la propiedad
        idCity: number, // Ciudad donde se encuentra la propiedad
        geolocation:json
        description:string, // Descripción de la propiedad
        photos:string[], // Lista de URLs de las fotos de la propiedad
        bedrooms:number, // Número de habitaciones en la propiedad
        bathrooms:number, // Número de baños en la propiedad
        squareMeters: number, // Área en metros cuadrados de la propiedad
        yearBuilt:number, // Año de construcción de la propiedad
        amenities:string[], // Lista de comodidades o servicios disponibles en la propiedad
        type:enum //Enum de tipos de propiedad
    },
    house:{
        stories: number, // Número de pisos de la casa
        garage: boolean, // Indica si la casa tiene cochera o garaje
        backyard: boolean, // Indica si la casa tiene patio trasero
        pool: boolean, // Indica si la casa tiene piscina
    },
    ph:{
        floorNumber: number, // Número de piso del PH
        elevator: boolean, // Indica si el PH tiene ascensor
        balcony: boolean, // Indica si el PH tiene balcón
        gym: boolean, // Indica si el PH tiene gimnasio
    },
    apartment:{
        floorNumber: number, // Número de piso del apartamento
        elevator: boolean, // Indica si el apartamento tiene ascensor
        balcony: boolean, // Indica si el apartamento tiene balcón
        gym: boolean, // Indica si el apartamento tiene gimnasio
    },
    ranch:{
        acreage: number, // Área en acres
        barn: boolean, // Indica si tiene establo
        pasture: boolean, // Indica si tiene pastizales
        pond: boolean, // Indica si tiene un estanque
    }
}   
*/
