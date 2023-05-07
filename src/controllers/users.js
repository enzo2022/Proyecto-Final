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

//here
const { hashPassword, verifyPassword } = require("../utils");
const { generateToken } = require("../utils");

//POST
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
    return res.status(404).json({ Error: "Email and password are required" });

  try {
    const searchUser = await User.findOne({
      where: { email: email },
      include: [
        { model: Property },
        { model: Favorite },
        { model: Membership },
      ],
    });

    if (!searchUser) return res.status(404).json({ Error: "Email not found" });

    const passwordMatch = await verifyPassword(searchUser.password, password);
    if (!passwordMatch)
      res.status(401).json({ Error: "Incorrect email or password." });

    if (searchUser.state === "blocked")
      return res.status(401).json({ Error: "This user is blocked" });

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

    const token = generateToken({
      email: user.email,
      user: user.userName,
      type: user.userType,
    });

    res.json({ user, token: token });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

//GET
const getUserById = async (req, res) => {
  const { idUser } = req.params;
  try {
    const user = await User.findOne({
      where: { idUser: idUser },
      include: { model: Favorite },
    });

    if (!user)
      res.status(404).json({
        error: {
          message: "user not found",
        },
      });

    res.status(200).json({ info: { status: 200, message: "Success" }, user });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await User.findAll({
      include: { model: Membership },
    });

    if (!users.length)
      return res.send({ error: {message:"No hay usuarios en la base de datos"} });

    res.status(200).json({ info:{mesagge:"Success"}, users});
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//PUT
const setState = async (req, res) => {
  const { idUser } = req.params;
  const { state } = req.query;

  if (!state)
    return res.status(400).json({ Error: "query ?state='' is required" });
  try {
    let user = await User.findByPk(idUser);
    if (!user?.idUser) return res.status(404).json({ Error: "User not found" });

    await User.update(
      { state },
      {
        where: {
          idUser: idUser,
        },
      }
    );
    res.send({ Message: `Correct updated` });
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    let user = await User.findByPk(idUser);
    if (!user?.idUser) return res.status(404).json({ Error: "User not found" });

    await User.update(req.body, {
      where: {
        idUser: idUser,
      },
    });

    res.status(200).send({ Message: "User Updated" });
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
};

const setPremium = async (req, res) => {
  const { idUser } = req.params;
  try {
    await User.update(
      { userType: "Premium" },
      {
        where: {
          idUser: idUser,
        },
      }
    );
    const user = await User.findByPk(idUser);

    res.status(200).send({ Message: user });
  } catch (err) {
    res.status(404).send({ Error: err.message });
  }
};

//DELETE
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
  getUserById,
  getUsers,
  setPremium,
  setState,
  signUp,
  signIn,
  updateUser,
};
