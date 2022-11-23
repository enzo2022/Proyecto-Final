const mercadopago = require("mercadopago");

//Harcodeo el Acces Token
mercadopago.configure({
  access_token:
    "APP_USR-8932710584644285-112219-78d220634cd77b58987c834d1f4a172c-1245736185",
});

const premiumController =
  ("/",
  (req, res) => {
    let preference = {
      items: [
        {
          id: 123,
          title: "Mi producto",
          unit_price: 100,
          quantity: 1,
          currency_id: "ARS",
        },
      ],

      //notification_url: "https://misitio/api", //redirige despues de la compra
      back_urls: {
        failure: "http://localhost:3001/PaymentFail",
        pending: "http://localhost:3001/PaymentFail",
        success: "https://localhost:3001/PaymentOk",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

        console.log(response.body.init_point);
        res.redirect(response.body.init_point);
      })

      .catch(function (error) {
        console.log(error);
      });
  });

module.exports = { premiumController };
