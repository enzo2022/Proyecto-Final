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
  console.log(userName, email);
  return (msg = {
    from: "'Properties&you' <pfgrupo05a@gmail.com>",
    to: email,
    subject: `Gracias por registrar su propiedad  en Properties&you`,
    text: `Bienvenido ${userName} a Properties&you, su registro fue exitoso`,
    html: `<p style="text-align:center;">Bienvenido ${userName} a Properties&you, su registro fue exitoso</p>
  </br>
  <div style="text-align:center;">
  <img src="https://isewa.org.in/wp-content/uploads/2021/06/success.gif" alt="thanks!" />
  </div>`,
  });
};
const messageForUsersCreateProperty = (data) => {
  const message = {
    from: `${data.id_User}`,
    to: "pfgrupo05@gmail.com",
    subject: `${data.modality} - ${data.addrres} - ${data.price} `,
    text: `Solicitud ${data.modality}`,
    html: `<div style="text-align:center;">

  <p>Dirección:${data.address}</p>
  <p>Area:${data.area}</p>
  <p>Habitaciones:${data.bathrooms}</p>
  <p>Ambientes:${data.enviroments}</p>
  <p>Antiguedad:${data.antiquity}</p>
  <p>Pisos:${data.floors}</p>
  <p>Baños:${data.rooms}</p>
  <p>Garages:${data.garage}</p>
  <p>	Precio:${data.price}</p>
  <p>Tipo_Inmueble:${data.type}</p>
  <p>Ciudad:${data.id_city}</p>
  <p>descripción:${data.description}</p>
  <p>modalidad:${data.modality}</p>
  <p>Obs:${data.observation}</p>
  <p>Imagenes:${data.images}</p>
  <p>Servicios:${data.services}</p>
  <p>Geolocalizacion:${data.geolocation}</p>
  

        </br>
   
        <p>Direccion: ${data.address}</p>
        <p>Tipo: ${data.type}</p>
        <p>Precio: ${data.price}</p>
        <p>Para: ${data.modalite}</p>
        <p>Habitaciones: ${data.rooms}</p>
        <p>Pisos: ${data.floors}</p>
        <p>Garage: ${data.garage}</p>
        <p>M2: ${data.m2}</p>
        <p>Descripcion: ${data.description}</p>
        <p>Expensas: ${data.expenses}</p>
        <p>Vendedor: ${data.seller}</p>
 <div style="text-align:center;">
  <img src=${data.images} alt="thanks!" />
  </div>`,
  };
  return message;
};

const messageForClient = (userName, email) => {
  return (message = {
    from: "Propertis&you' <pfgrupo05@@gmail.com>",
    to: email,
    subject: `Registo de Propiedad`,
    text: `Registro exitoso`,
    html: `<p style="text-align:center;">
          Hola ${userName} !!, Gracias por confiar en nosotros. 
          Estaremos encantados de ayudarle a vender o Arrendar su casa,
          por lo que pronto nos contactaremos con usted.
  
          Cordial saludo
          
          Propertis&you
      </p>
      </br>
      `,
  });
};

module.exports = {
  transport,
  registerMessage,
  messageForUsersCreateProperty,
  messageForClient,
};

{
  /* <p>Localizacion: ${
  (data.geolocalizacion.longitude, data.geolocalizacion.latitude)
}</p> */
}
