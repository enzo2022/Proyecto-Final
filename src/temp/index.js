const { users, properties } = require("../data/data.json");
const { User, Property, House, PH, Apartment, City } = require("../db");
const { hashPassword } = require("../utils");
const axios = require("axios");

require("dotenv").config();
const { ADMIN } = process.env;

async function addUsers() {
  try {
    if (ADMIN?.length) {
      let MY_ADMIN = JSON.parse(ADMIN);
      await addAdmin(MY_ADMIN);
    }

    if (true) {
      const newUsers = users.map(async (user) => ({
        ...user,
        password: await hashPassword(user.password),
      }));

      const usersWithHashedPasswords = await Promise.all(newUsers);
      await User.bulkCreate(usersWithHashedPasswords);
    }
    return "Ok → users added";
  } catch (error) {
    return error.message;
  }
}

async function addAdmin(ADMIN) {
  if (!ADMIN) return;

  ADMIN.password = await hashPassword(ADMIN.password);
  await User.create(ADMIN);
  return;
}

async function addProperties() {
  const usersPremium = await addUsersPremium();

  const allProperties = properties.map((property, i) => ({
    ...property.property,
    idUser: usersPremium[i],
  }));
  await Property.bulkCreate(allProperties);

  const Houses = getPropertiesByType("House");
  const PHs = getPropertiesByType("PH");
  const Apartments = getPropertiesByType("Apartment");

  await House.bulkCreate(Houses);
  await PH.bulkCreate(PHs);
  await Apartment.bulkCreate(Apartments);

  return "Ok → properties added";
}

async function addUsersPremium() {
  const ramdoms = ramdomsUsers(properties.length, users.length - 1);
  const usersIds = Array.from(new Set(ramdoms));

  try {
    const usersPremium = usersIds.map(
      async (idUser) =>
        await User.update(
          { userType: "premium" },
          {
            where: {
              idUser: idUser,
            },
          }
        )
    );

    await Promise.all(usersPremium);
    return ramdoms;
  } catch (error) {
    return error.message;
  }
}

function ramdomsUsers(size, num) {
  const ramdoms = [];

  for (let i = 0; i < size; i++) {
    const ramdomIndex = Math.floor(Math.random() * (num + 1));
    ramdoms.push(users[ramdomIndex].idUser);
  }

  return ramdoms;
}

function getPropertiesByType(type) {
  const propertiesByType = properties
    .map((property) => ({
      ...property.type,
      idProperty: property.property.idProperty,
    }))
    .filter((house) => house.name === type);

  return propertiesByType;
}

async function addCities() {
  let URL =
    "https://apis.datos.gob.ar/georef/api/municipios?campos=id,nombre,%20provincia.nombre&max=5000";
  try {
    let { data } = await axios.get(URL);

    const cities = data.municipios.map((city) => ({
      idCity: city.id,
      name: city.nombre,
      province: city.provincia.nombre,
      string: city.nombre + " " + city.provincia.nombre,
    }));

    await City.bulkCreate(cities);

    return "Ok → cities added";
  } catch (error) {
    return error.message;
  }
}

async function addInformation() {
  console.log(await addUsers());
  console.log(await addCities());
  console.log(await addProperties());
}
module.exports = {
  addUsers,
  addProperties,
  addCities,
  addInformation
};
