//ACCES_TOKEN= process.env.ACCESS_TOKEN
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-6235988389716182-111918-7311f46bd8cadd84cc769ec63d991932-436827218",
});

module.exports = {
  mercadopago,
};

/* export const f = {};
 */

//mp
const premiumController = async (req, res) => {
  try {
    let preference = {
      items: [
        {
          title: "User Premium",
          quantity: 1,
          unit_price: 200,
        },
      ],
      back_urls: {
        failure: "http://localhost:3001/PaymentFail",
        pending: "http://localhost:3001/PaymentFail",
        success: "https://localhost:3001/PaymentOk",
      },
      auto_return: "approved",
    };
    const response = await mercadoPago.preferences.create(preference);
    const preferenceId = response.body.init_point;
    res.redirect(preferenceId);
  } catch (error) {
    throw Error("Payment error");
  }
};

module.exports = { premiumController };
