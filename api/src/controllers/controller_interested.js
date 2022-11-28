const { Interested, Property, User } = require("../db.js");
const notifier = require("node-notifier");
const {
  transport,
  sendEmailToOwner,
} = require("../utils/nodemailer/nodemailer.js");
const { user } = require("../utils/config.js");

//usuario interesado en la publicacion
const userInterested = async (req, res) => {
  try {
    //id_User interesado en la propeudad
    const { id_User, id } = req.body;

    //Bucamos el propietario de la publicacion
    const feedbackProperty = await Property.findByPk(id, {
      include: { model: User },
    });

    const idUser = await User.findByPk(id_User);

    //email Owner property

    const emailOwuner = feedbackProperty.User.email;
    const userNameOwner = feedbackProperty.User.userName;

    //buscamos el user interesadp //LLEGA BIEN
    const { email, userName, cellphone, photo } = idUser;
    console.log(email, userName, cellphone, photo);

    if (!feedbackProperty) return res.send({ Message: "Fedback inexistente" });

    const interestedUser = await Interested.create(req.body);

    //NODEMAILER, User interested in property
    const info = await transport.sendMail(
      sendEmailToOwner(
        email,
        userName,
        cellphone,
        photo,
        emailOwuner,
        userNameOwner
      )
    );
    return res
      .status(200)
      .send({ Message: `Email enviado al propietario exitosamente!!` });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ Error: err.message });
  }
};

module.exports = { userInterested };
