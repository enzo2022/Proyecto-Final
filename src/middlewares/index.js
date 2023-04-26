const {authenticateToken, handleJwtError} = require("./jwt/jwtAuthMiddleware");

module.exports = {
    authenticateToken,
    handleJwtError
}