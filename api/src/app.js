const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./config/db.js");
const { UploadData } = require("./controllers/uploadData");
const PORT = process.env.DB_PORT;

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());

//DB-CONNECTION

sequelize
  .authenticate()
  .then(() => console.log("DB-Connected"))
  .catch((err) => console.log(err.message));

//ROUTES
app.use("/", require("./routes/user.routes"));
app.use("/", require("./routes/properties.routes"));
app.use("/", require("./routes/cities_routes"));
//app.use("/properties", require("./routes/properties.routes"));

(async function () {
  await sequelize.sync({ force: true });
  app.listen(PORT, () => console.log("Listening on port ", PORT));
})();

UploadData();
