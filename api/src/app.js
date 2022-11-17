const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");

require("./db.js");

const server = express();

server.name = "API";

//ROUTES
app.use("/", require("./routes/properties.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/", require("./routes/properties.routes"));
app.use("/", require("./routes/cities_routes"));
app.use("/properties", require("./routes/properties.routes"));

(async function () {
  await sequelize.sync({ force: true });
  app.listen(PORT, async () => {
    await UpCities();
    functionJson();
    console.log("Listening on port ", PORT);
  });
})();

// const express = require("express");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const routes = require("./routes/index.js");
// const cors = require("cors");
// require("./db.js");

module.exports = server;
