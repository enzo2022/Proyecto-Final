const { Membership } = require("../db.js");

// id_Membership: "325c1472-31fc-475f-8894-b12daf86b8ee",
// id_User: "325c1472-31fc-475f-8894-b12daf86b8ee",
// id_Membership_type: "b8489941-74fe-469a-bfc8-51e8279dd21f",
// payment: 100,

//INGRESE PAGO
const createMembership = async (req, res) => {
  try {
    const createMembership = await Membership.create(req.body);

    res
      .status(201)
      .json({ Message: "Membership creado", payload: createMembership });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//funciomn qiue te devuelva los usuario dependiendo
// el tipo de membresia

module.exports = { createMembership };
