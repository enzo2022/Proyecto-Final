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

// const messageProperties = {
//   from: `${user}`,
//   to: "pfgrupo05@gmail.com",
//   subject: `${modality} - ${addrres} - ${price} `,
//   text: `Solicitud ${modality}`,
//   html: `<div style="text-align:center;">

//   <p>Dirección:${address}</p>
//   <p>Area:${area}</p>
//   <p>Habitaciones:${bathrooms}</p>
//   <p>Ambientes:${enviroments}</p>
//   <p>Antiguedad:${antiquity}</p>
//   <p>Pisos:${floors}</p>
//   <p>Baños:${rooms}</p>
//   <p>Garages:${garage}</p>
//   <p>	Precio:${price}</p>
//   <p>Tipo_Inmueble:${type}</p>
//   <p>Ciudad:${id_city}</p>
//   <p>descripción:${description}</p>
//   <p>modalidad:${modality}</p>
//   <p>Obs:${observation}</p>
//   <p>Imagenes:${images}</p>
//   <p>Servicios:${services}</p>
//   <p>Geolocalizacion:${geolocation}</p>

//   <p>Nombre: ${name}</p>
//         </br>
//         <p>Localizacion: ${
//           (geolocalizacion.longitude, geolocalizacion.latitude)
//         }</p>
//         <p>Direccion: ${address}</p>
//         <p>Tipo: ${type}</p>
//         <p>Precio: ${price}</p>
//         <p>Para: ${modalite}</p>
//         <p>Habitaciones: ${rooms}</p>
//         <p>Pisos: ${floors}</p>
//         <p>Garage: ${garage}</p>
//         <p>M2: ${m2}</p>
//         <p>Descripcion: ${description}</p>
//         <p>Expensas: ${expenses}</p>
//         <p>Vendedor: ${seller}</p>
//  <div style="text-align:center;">
//   <img src=${images} alt="thanks!" />
//   </div>`,
// };
module.exports = { transport, registerMessage };
