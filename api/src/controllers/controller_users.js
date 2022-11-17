const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { expires, secret } = require("../utils/config.js");
const { User, Property } = require("../db.js");
const { transport, registerMessage } = require("../utils/nodemailer.js");

//TRANSPORT NODEMAILER CONFIGURATION

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

    const info = await transport.sendMail(registerMessage(userName, email));

    return res.status(200).send("Usuario creado");
  } catch (e) {
    return res.status(500).send({ Error: e.message });
  }
};

//FUNTION LOGIN USER
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const serachUser = await User.findOne({
      where: { email: email },
      include: { model: Property },
    });

    if (!serachUser) {
      return res.status(404).json({
        ok: false,
        err: { message: "La cuenta no existe, deberias loguearte!" },
      });
    }

    if (!bcrypt.compareSync(password, serachUser.password))
      throw new Error("Password incorrecto");

    let user = {
      email: serachUser.email,
      id_User: serachUser.id_User,
      photo: serachUser.photo,
      user_type: serachUser.user_type,
    };

    const token = jwt.sign({ user }, secret, { expiresIn: expires });

    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

//GET ALL users / GET AL FRONT
const getUsers = async (req, res) => {
  try {
    let users = await User.findAll();
    res.status(200).json({ Message: "Success", payload: users });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const prueba = (req, res) => {
  try {
    res
      .status(200)
      .json("ACCESO PERMITIDO PEUS ERES=> SOLO PEUDEN ENTRAR PREMIUN Y ADMIN");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const pruebados = (req, res) => {
  try {
    res
      .status(200)
      .json(
        "ACCESO PERMITIDO PUES ERES =>  PUEDEN ENTRAR PREMIUN ADMIN Y LOGGED"
      );
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = {
  getUsers,
  createUser,
  login,
  prueba,
  pruebados,
};
