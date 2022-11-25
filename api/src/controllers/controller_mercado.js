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

      //notification_url: "https://proyecto-final-frontend-lyart.vercel.app/admin ", //redirige despues de la compra
      back_urls: {
        failure: "http://localhost:3001/PaymentFail", // https://proyecto-final-frontend-lyart.vercel.app/dasboard
        pending: "http://localhost:3001/PaymentFail",
        success: "https://localhost:3001/PaymentOk",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

        const generarPago = {
          id_pago: response.body.id,
          clientId: response.body.client_id,
          linkPago: response.body.init_point,
          collector_id: response.body.collector_id,
          date: response.body.date_created,
        };

        boletaPago(generarPago);

        console.log(
          "Se generaron los siguientes datos relevantes  de Mercado Pago ",
          generarPago
        );
        res.redirect(response.body.init_point);
      })

      .catch(function (error) {
        console.log(error);
      });
  });

module.exports = { premiumController, boletaPago };
