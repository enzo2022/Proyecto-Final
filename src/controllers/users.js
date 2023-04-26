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

const { hashPassword, verifyPassword } = require("../utils");

const signUp = async (req, res) => {
  const { fName, lName, userName, password, email } = req.body;
  if (!fName || !lName || !userName || !password || !email)
    return res.status(400).send("Some data are missing");

  try {
    const findUser = await User.findOne({
      where: { email: email },
    });

    if (findUser) return res.status(409).send("User already exist");
    const hashPass = await hashPassword(password);
    const user = await User.create({
      lName,
      fName,
      userName,
      email,
      password: hashPass,
    });

    /*     //notify property created succes
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
        // console.log(err, response);
      }
    );
    //NODEMAILER, SEND EMAIL TO USER
    const info = await transport.sendMail(registerMessage(userName, email)); */
    return res.send({ Message: "Usuario creado" });
  } catch (err) {
    return res.status(500).send({ Error: err.message });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).send("Email and password are required");

  try {
    const searchUser = await User.findOne({
      where: { email: email },
      include: [
        { model: Property },
        { model: Favorite },
        { model: Membership },
      ],
    });

    if (!searchUser)
      return res.status(404).send({ ok: false, Error: "Email not found" });

    const passwordMatch = await verifyPassword(searchUser.password, password);
    if (!passwordMatch)
      res.status(401).json({ message: "Incorrect email or password." });

    let user = {
      email: searchUser.email,
      userName: searchUser.userName,
      idUser: searchUser.idUser,
      photo: searchUser.photo,
      userType: searchUser.userType,
      property: searchUser.Properties,
      favorites: searchUser.Favorites,
      memberships: searchUser.Memberships,
      cellphone: searchUser.cellphone,
    };

    const token = 2; //jwt.sign({ user }, JWT_SECRET, {
    //expiresIn: JWT_EXPIRES,
    //});

    res.json({ Message: user, token: token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const findUserById = async (req, res) => {
  const { idUser } = req.params;
  try {
    const searchByPK = await User.findOne({
      where: { idUser: idUser },
      include: { model: Favorite },
    });

    if (!searchByPK) throw new Error("User not found");
    res.status(200).json({ Message: "Success", payload: searchByPK });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

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
  const { id_User } = req.params;
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

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  if (!idUser) return res.status(404).send("idUser is required");
  
  try {
    await User.destroy({ where: { idUser: idUser } });

    res.json({ Message: "User delete correctly" });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

module.exports = {
  deleteUser,
  findUserById,
  getAll,
  signUp,
  signIn,
  uplaodUser,
  upDate,
};
