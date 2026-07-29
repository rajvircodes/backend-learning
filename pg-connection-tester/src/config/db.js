const { Pool } = require("pg");

require("dotenv").config();
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.DB_NAME,
});
console.log(process.env.PG_PASSWORD);
console.log(process.env.PG_USERNAME);

module.exports = pool;
