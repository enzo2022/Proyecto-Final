const nodemailer = require("nodemailer");


// Configuracion de servidor de correo con mailtrap
//https://mailtrap.io/signin


const createTrans = () => {
	// esta constante nos restorna esta conexion
	var transport = nodemailer.createTransport({
		host: "smtp.mailtrap.io",
		port: 2525,
		auth: {
        user: "9916f092f6a22e",
        pass: "5a6470a30adbe8"
		}
	});

	return transport;
};

// transport.verify().then(() => console.log("ready for send emails"));

const sendMail = async () => {
	const transporter = createTrans();
	const info = await transporter.sendMail({
      from: '"Henry PF_Propertis&you ☕" <seguridad.wifi2021@gmail.com>',
      to: "rodrigomalegre@gmail.com",
      subject: "Hello ✔",
      html: " <b> Hello World </b>"
	});

	console.log("Message sent : %s", info.messageId);

	return;
};

// await transporter.sendMail(mailOptions, (error, info) => {
// 	if (error) {
// 		res.status(500).send(error.message);
// 	} else {
// 		res.status(200).json(req.body);
// 	}
// });

exports.sendMail = () => sendMail();
