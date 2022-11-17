const jwt = require("jsonwebtoken");
const { secret } = require("../utils/config.js");

const verifyTokenUserLogged = (req, res, next) => {
  try {
    const authHeader =
      req.headers["Authorization"] || req.headers["authorization"];

    if (authHeader.split(" ")[0] != "Bearer")
      return res.status(400).json({ Error: "Invalid token type" });

    const token = authHeader.split(" ")[1];

    jwt.verify(token, secret, async (error, decoded) => {
      if (error) {
        return res.json({ Message: "El token no es valido" });
      } else {
        req.user = decoded;

        if (
          decoded.user.user_type === "userLogged" ||
          decoded.user.user_type === "admin" ||
          decoded.user.user_type === "userPremiun"
        ) {
          next();
        } else {
          res.send({ Message: "Necesitas loguearte" });
        }
      }
    });
  } catch (err) {
    return res.status(403).send({ Error: err.message });
  }
};

module.exports = verifyTokenUserLogged;
