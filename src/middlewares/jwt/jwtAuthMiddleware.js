const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config/config");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    res.status(401).json({ message: "Authentication token not provided." });
  else
    jwt.verify(token, SECRET_KEY, (err, _user) => {
      if (err) res.status(403).json({ message: "invalid token" });
      else next();
    });
}

function handleJwtError(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Token no válido" });
  } else {
    next(err);
  }
}

module.exports = {
    authenticateToken,
    handleJwtError
}