const nodemailer = require("nodemailer");
const { NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_USER, NODEMAILER_PASS } =
  process.env;

//TRANSPORT NODEMAILER CONFIGURATION
const transport = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: NODEMAILER_PORT,
  secure: true,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
});

const registerMessage = (userName, email) => {
  console.log(userName, email);
  return (msg = {
    from: "'Properties&you' <pfgrupo05a@gmail.com>",
    to: email,
    subject: `Gracias por registrarse en Properties&you`,
    text: `Bienvenido ${userName} a Properties&you, su registro fue exitoso`,
    html: `<p style="text-align:center;">Bienvenido ${userName} a Properties&you, su registro fue exitoso</p>
  </br>
  <div style="text-align:center;">
  <img src="https://isewa.org.in/wp-content/uploads/2021/06/success.gif" alt="thanks!" />
  </div>`,
  });
};

const messageForUsersCreateProperty = (data, email, userName) => {
  return (message = {
    from: "Propertis&you' <pfgrupo05@gmail.com>",
    to: email,
    subject: `Registo de Propiedad`,
    text: `Registro exitoso`,
    html: `<p style="text-align:center;">
          Hola ${userName} !!, Gracias por confiar en nosotros. 
          Estaremos encantados de ayudarle a vender o Arrendar su casa,
          por lo que pronto nos contactaremos con usted.
  
          Cordial saludo
`,
  });
};

// const messageForClient = (userName, email) => {
//   return (message = {
//     from: "Propertis&you' <pfgrupo05@@gmail.com>",
//     to: email,
//     subject: `Registo de Propiedad`,
//     text: `Registro exitoso`,
//     html: `<p style="text-align:center;">
//           Hola ${userName} !!, Gracias por confiar en nosotros.
//           Estaremos encantados de ayudarle a vender o Arrendar su casa,
//           por lo que pronto nos contactaremos con usted.

//           Cordial saludo

//           Propertis&you

//           <h2>su propiedad</h2>
//       </p>
//       </br>
//       `,
//   });
// };

module.exports = {
  transport,
  registerMessage,
  messageForUsersCreateProperty,
};
