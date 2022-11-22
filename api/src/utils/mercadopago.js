const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token:
    "TEST-6235988389716182-111918-7311f46bd8cadd84cc769ec63d991932-436827218",
});

module.exports = {
  mercadopago,
};
