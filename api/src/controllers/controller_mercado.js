const mercadopago = require("mercadopago");
const { PayOrder } = require("../db.js");

//Harcodeo el Acces Token
mercadopago.configure({
  access_token:
    "APP_USR-8932710584644285-112219-78d220634cd77b58987c834d1f4a172c-1245736185",
});

const boletaPago = async (preference) => {
  try {
    let preferenceOrder = await PayOrder.create({
      idPage: preference.id_pago,
      clientId: preference.clientId,
      linkPage: preference.linkPago,
      collectorId: preference.collector_id,
      date: preference.date,
    });
    console.log("ok!. Se almaceno en la Tabla PayOrder");

    return preferenceOrder;
  } catch (error) {
    console.error(error);
  }
};

const premiumController =
  ("/",
  (req, res) => {
    let preference = {
      items: [
        {
          id: 123,
          title: "Properties & You ",
          description:
            "Gracias por la  Compra , una vez actualizado el pago podrá editar las propiedades ya sea venta o alquiler ",
          unit_price: 100,
          quantity: 1,
          currency_id: "ARS",
        },
      ],


      //notification_url: "http://localhost:3000/bePremium", //redirige despues de la compra
      back_urls: {
        failure: "https://proyecto-final-frontend-htvo3mpul-jhoniernem.vercel.app/bePremium",
        pending: "https://proyecto-final-frontend-htvo3mpul-jhoniernem.vercel.app/bePremium",
        success: "https://proyecto-final-frontend-htvo3mpul-jhoniernem.vercel.app/bePremium",
      },
      auto_return: "approved",
      external_reference: req.body.user_id,
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

        console.log(response.body.init_point);
        res.send(response.body.init_point);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

module.exports = { premiumController, boletaPago };
