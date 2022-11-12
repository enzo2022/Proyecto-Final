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
app.use("/user", require("./routes/user.routes"));
app.use("/", require("./routes/properties.routes"));
app.use("/", require("./routes/cities_routes"));
app.use("/properties", require("./routes/properties.routes"));

(async function () {
  await sequelize.sync({ force: true });
  app.listen(PORT, () => console.log("Listening on port ", PORT));
})();

// const express = require("express");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const routes = require("./routes/index.js");
// const cors = require("cors");
// require("./db.js");

// const server = express();

// server.name = "API";
// server.use(cors());
// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));
// server.use(cookieParser());
// server.use(morgan("dev"));
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use("/", routes);

// // Error catching endware.
// server.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

// module.exports = server;
UpCities();
// fucntionJson();
