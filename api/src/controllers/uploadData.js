const { User, City, Property } = require("../db.js");

const { getCitiesApiSNDG } = require("./controller_cities");
const { dataUsers, dataProperties } = require("../utils/fakeData.js");

const UploadData = async (req, res, next) => {
  await UploadCities();
  await UploadUsers();
  await UploadProperties();
  console.log("Cities: ", await City.count());
  console.log("Users: ", await User.count());
  console.log("Properties: ", await Property.count());
};

const UploadCities = async (req, res, next) => {
  try {
    let cities = await getCitiesApiSNDG();
    await cities.data.municipios.map(
      async (e) =>
        await City.findOrCreate({
          where: {
            idCity: e.id,
            city: e.nombre,
            provincia: e.provincia.nombre,
          },
        })
    );
  } catch (err) {
    console.log("Error de la Api, no devolvio datos:");
  }
};

const UploadUsers = async (req, res, next) => {
  try {
    for (let i = 0; i < dataUsers.length; i++) await User.create(dataUsers[i]);
  } catch (err) {
    console.log("controlles.uploaddata.UploadUsers: ", err);
  }
};

const UploadProperties = async (req, res, next) => {
  try {
    Promise.all(dataProperties.map((e) => Property.create(e)));
  } catch (error) {
    console.log("controlles.uploaddata.UploadProperties: ", err);
  }
};

module.exports = {
  UploadData,
};
