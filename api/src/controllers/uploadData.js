const {
  User,
  City,
  Property,
  Favorite,
  MembershipType,
  Membership,
  Feedback,
} = require("../db.js");

const { getCitiesApiSNDG } = require("./controller_cities");
const {
  dataUsers,
  dataProperties,
  dataFavorites,
  dataMembershipTypes,
  dataMemberships,

  dataFeedback,
} = require("../utils/fakeData.js");

const UploadData = async (req, res, next) => {
  await UploadCities();
  await UploadUsers();
  await UploadProperties();
  await UploadFavorites();
  await UploadMemberships_types();
  await UploadMemberships();

  await UploadFeedback();

  console.log("Cities: ", await City.count());
  console.log("Users: ", await User.count());
  console.log("Properties: ", await Property.count());
  console.log("Favorites: ", await Favorite.count());
  console.log("MembershipTypes: ", await MembershipType.count());

  console.log("Feedbacks: ", await Feedback.count());
  console.log("Membership: ", await Membership.count());
  console.log("MembershipTypes: ", await MembershipType.count());
  console.log("hola");
  // console.log("MembershipTypes: ", await MembershipType.count());
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

const UploadFavorites = async (req, res, next) => {
  try {
    for (let i = 0; i < dataFavorites.length; i++)
      await Favorite.create(dataFavorites[i]);
  } catch (err) {
    console.log("controlles.uploaddata.UploadFavorites: ", err);
  }
};

const UploadMemberships_types = async (req, res, next) => {
  try {
    Promise.all(dataMembershipTypes.map((e) => MembershipType.create(e)));
  } catch (error) {
    console.log("controlles.uploaddata.UploadMembershipTypes: ", err);
  }
};

const UploadMemberships = async (req, res, next) => {
  try {
    Promise.all(dataMemberships.map((e) => Membership.create(e)));
  } catch (error) {
    console.log("controlles.uploaddata.UploadMembership: ", err);
  }
};

const UploadFeedback = async (req, res, next) => {
  try {
    Promise.all(dataFeedback.map((e) => Feedback.create(e)));
  } catch (error) {
    console.log("controlles.uploaddata.UploadFeedback: ", err);
  }
};

module.exports = {
  UploadData,
};
