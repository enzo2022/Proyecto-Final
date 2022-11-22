//ACCES_TOKEN= process.env.ACCESS_TOKEN
const mercadoPago = require("../utils/mercadopago");

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
