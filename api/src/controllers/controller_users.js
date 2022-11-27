const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET, JWT_EXPIRES } = process.env;
const notifier = require("node-notifier");
const path = require("path");
const {
  User,
  Property,
  Favorite,
  Membership,
  MembershipType,
} = require("../db.js");

const {
  transport,
  registerMessage,
} = require("../utils/nodemailer/nodemailer.js");

//FUNTION SIGNUP USER
const createUser = async (req, res) => {
  try {
    const { email, userName, password, photo, cellphone, user_type } = req.body;

    const findUser = await User.findOne({
      where: { email: email },
    });

    if (findUser) return res.status(412).send("User already exist");

    if (!userName || !email || !password)
      return res.status(412).send("Users, Passd y Email no pueder ser nulos");

    const encrypted = await bcrypt.hash(password, 10);

    const myuser = await User.create({
      email,
      userName,
      password: encrypted,
      photo: photo
        ? photo
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",
      cellphone,
      user_type,
    });

    //notify property created succes
    notifier.notify(
      {
        sound: true,
        wait: true,
        title: `Bienvenid@ ${myuser.userName}! `,
        message: "Gracias por registrarte en Properties&&you",
        icon: path.join(
          "https://res.cloudinary.com/dg05pzjsq/image/upload/v1669030750/propertiesandyouicon_c9h24a.png"
        ),
      },
      function (err, response) {
        console.log(err, response);
      }
    );

    //NODEMAILER, SEND EMAIL TO USER
    // const info = await transport.sendMail(registerMessage(userName, email));

    return res.status(200).send({ Message: "Usuario creado" });
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};

//FUNTION LOGIN USER => POST
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const searchUser = await User.findOne({
      where: { email: email },
      include: [
        { model: Property },
        { model: Favorite },
        { model: Membership },
      ],
    });

    if (!searchUser)
      return res.send({ ok: false, Error: "El correo no existe" });
    if (!email || !password)
      return res.send({ Error: "Necesitas ingresar usuario y contraseña" });

    if (!bcrypt.compareSync(password, searchUser.password))
      return res.send({ Error: "Password incorrecto" });

    let user = {
      email: searchUser.email,
      userName: searchUser.userName,
      id_User: searchUser.id_User,
      photo: searchUser.photo,
      user_type: searchUser.user_type,
      property: searchUser.Properties,
      favorites: searchUser.Favorites,
      memberships: searchUser.Memberships,
    };

    const token = jwt.sign({ user }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES,
    });

    res.status(200).json({ Message: user, token: token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

//GET ALL users / GET AL FRONT
//agregar tipo membresia
const getAll = async (req, res) => {
  try {
    let users = await User.findAll({
      include: { model: Membership },
    });

    if (!users.length)
      return res.send({ Error: "No hay usuarios en la base de datos" });

    res.status(200).json({ Message: "Success", payload: users });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const uplaodUser = async (req, res) => {
  const { id_user } = req.params;
  try {
    let user = await User.findByPk(id_user);

    const newUploadUser = await User.update(req.body, {
      where: {
        id_User: id_user,
      },
    });

    if (newUploadUser[0] === 0) throw new Error("Id inexistente");
    res.status(200).send({ Message: user });
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
};

const upDate = async (req, res) => {
  const { id_user } = req.params;
  try {
    await User.update(
      { user_type: "userPremiun" },
      {
        where: {
          id_User: id_user,
        },
      }
    );
    const user = await User.findByPk(id_user);

    res.status(200).send({ Message: user });
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
};

//crear el destroy
const deleteUser = async (req, res) => {
  const { id_User } = req.params;
  try {
    if (!id_User) return res.send("User inexistente");
    const deleteUser = await Property.destroy({ where: { id_User: id_User } });
    res.status(200).json({ Message: "Usuario eliminado correctamente!" });
  } catch (err) {
    res.status(400).json({ Message: err.message });
  }
};
module.exports = {
  getAll,
  createUser,
  login,
  uplaodUser,
  upDate,
  deleteUser,
};
