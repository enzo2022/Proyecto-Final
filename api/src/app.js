const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./config/db.js");
const { UpCities } = require("./controllers/cities.controller.js");
const { fucntionJson } = require("./controllers/properties.controller.js");
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//DB-CONNECTION

sequelize
  .authenticate()
  .then(() => console.log("DB-Connected"))
  .catch((err) => console.log(err.message));

//ROUTES

app.use("/", require("./routes/properties.routes"));
// app.use("/publications", require("./routes/publications.routes"));
app.use("/", require("./routes/cities_routes.js"));
app.use("/properties", require("./routes/properties.routes"));

(async function () {
  await sequelize.sync({ force: false });
  app.listen(PORT, () => console.log("Listening on port ", PORT));
})();

UpCities();
