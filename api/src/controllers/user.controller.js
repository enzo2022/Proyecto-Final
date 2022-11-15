const Users = require("../models/User.js");
const nodemailer = require("nodemailer")
const bcrypt = require("bcryptjs") 
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
  const { email, userName, password, photo, mobil } = req.body;

  try {
    const findUser = await Users.findOne({
      where: { email: email },
    });

    if (findUser) throw new Error("User already exist");

    //hasheamos la clave del usuario 
    let passwordHash = await bcrypt.hash(password, 8)

    const createUser = await Users.create({
        email: email,
        userName: userName,
        password: passwordHash,
        photo: photo,
        mobil: mobil,
    });
    
    //NodeMailer
    //
    //emailer.sendMail() || sino funciona gmail user mailtrap

    const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD
        }
		});

    const secret = process.env.SECRET + createUser.password;
    const token = jwt.sign({ email: createUser.email, id: createUser.id }, secret, {
      expiresIn: 60 * 60 * 24,
    });
    const link = `${
      process.env.BACKEND || "http://localhost:3001"
    }/auth/verify/${createUser.id}/${token}`;
    // mail

		const mailOptions = {
			  from: process.env.EMAIL,
			  to: createUser.email,
		  	subject: "Verificacion de usuario",
        text: `Bienvenido ${createUser.userName}, gracias por registrarte para terminar el proceso
              de registro ingresa en el siguiente link para verificar tu cuenta ${link} el link
              tendra un tiempo de expiracion de un dia.
              Atentamente equipo de express clothes`
      };

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});

    res.status(201).json({ message: "User created!", payload: createUser });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const deleteUsuario = async (req, res, next) => {
	try {
      const id = req.params.id;
      const usuarioaborrar = await Users.findByPk(id);
      await usuarioaborrar.destroy();
      res.status(200).send(id);
      emailer.sendMail();
	} catch (error) {
		  next(error);
	}
};

//? POST cargar usuarios en la base de datos
const llenarUserDb = async (req, res) => {
	  const usuario = await Users.bulkCreate(user);
	  res.status(200).json({
      message: "base con users",
      payload: usuario
	});
};


module.exports = {
    signUp,
    llenarUserDb,
    deleteUsuario
};
