const nodemailer = require("nodemailer");

//TRANSPORT NODEMAILER CONFIGURATION
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "pfgrupo05@gmail.com",
    pass: "mfxi madr goeb wyoi",
  },
});

const registerMessage = (userName, email) => {
  return (msg = {
    from: "'Properties&you' <pfgrupo05a@gmail.com>",
    to: email,
    subject: `Gracias por registrarte en Properties&you`,
    text: `Bienvenido ${userName} a Properties&you, su registro fue exitoso`,
    html: `<p style="text-align:center;">Bienvenido ${userName} a Properties&you, su registro fue exitoso</p>
  </br>
  <div style="text-align:center;">
  <img src="https://isewa.org.in/wp-content/uploads/2021/06/success.gif" alt="thanks!" />
  </div>`,
  });
};
const registerMessageProperty = (email, userName) => {
  const messageProperties = {
    from: "'Properties&you' <pfgrupo05a@gmail.com>",
    to: email,
    subject: `Gracias  ${userName} por postular tu propiedad en Properties&you `,
  };
  return messageProperties;
};
module.exports = { transport, registerMessage, registerMessageProperty };
