require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, JWT_SECRET, JWT_EXPIRES } =
  process.env;

module.exports = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  expires: JWT_EXPIRES,
  secret: JWT_SECRET,
};
