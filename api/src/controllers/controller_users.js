const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { expires, secret } = require("../utils/config.js");
const { User, Property } = require("../db.js");
const { transport, registerMessage } = require("../utils/nodemailer.js");

//TRANSPORT NODEMAILER CONFIGURATION

//FUNTION SIGNUP USER
const signUp = async (req, res) => {
  try {
    const { email, userName, password, photo, cellphone } = req.body;
    console.log(email);

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

    const user = await User.findOne({
      where: { email: email },
      include: { model: Property },
    });

    if (!user) {
      return res.status(404).json({
        ok: false,
        err: { message: "La cuenta no existe, deberias loguearte!" },
      });
    }

    if (!bcrypt.compareSync(password, user.password))
      throw new Error("Password incorrecto");

    let sendData = {
      email: user.email,
      idUser: user.id_User,
      photo: user.photo,
      userType: user.user_type,
    };

    const token = jwt.sign({ sendData }, secret, { expiresIn: expires });

    res.status(200).json({ user: sendData, token: token });
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

const validate = async (req, res) => {
  try {
    const { password, email } = req.body;
    let userEmail = await User.findOne({
      where: { email: email },
    });
    if (!userEmail) return res.json({ message: "Email or password incorrect" });

    let match = await bcrypt.compare(password, userEmail.password);
    if (match) {
      return res.json({ Message: "Correct password" });
    } else {
      return res.json({ Message: "Email or password incorrect" });
    }
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
const UpUsers = async (req, res, next) => {
  try {
    for (let i = 0; i < data.length; i++) {
      let { userName, photo, password, email, cellphone } = data[i];
      let createUser = await User.create({
        email: email,
        userName: userName,
        password: password,
        photo: photo,
        cellphone: cellphone,
      });
    }
  } catch (err) {
    console.log("UpUsers : ", err);
  }
};

module.exports = {
  UpUsers,
  getUsers,
  validate,
  signUp,
  login,
};
