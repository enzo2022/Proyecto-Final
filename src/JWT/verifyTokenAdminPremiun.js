const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env;

const verifyTokenAdminPremiun = (req, res, next) => {
	try {
		const authHeader =
			req.headers["Authorization"] || req.headers["authorization"];

		if (authHeader.split(" ")[0] != "Bearer")
			return res.status(400).json({ Error: "Invalid token type" });

		const token = authHeader.split(" ")[1];

		jwt.verify(token, JWT_SECRET, async (error, decoded) => {
			if (error) {
				return res.json({ Message: "El token no es valido" });
			} else {
				req.user = decoded;

				if (
					decoded.user.user_type === "admin" ||
					decoded.user.user_type === "userPremiun"
				) {
					next();
				} else {
					res.send({
						Message: "Solo para administradores y usuarios premiun",
					});
				}
			}
		});
	} catch (err) {
		return res.status(403).send({ Error: err.message });
	}
};

module.exports = verifyTokenAdminPremiun;
