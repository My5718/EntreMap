require("dotenv").config();
const parse = require("pg-connection-string").parse;
const pgconfig = parse(process.env.DATABASE_URL);
pgconfig.ssl = { rejectUnauthorized: false };

const knex = require("knex")({
  client: "pg",
  connection: pgconfig,
});

module.exports = knex;
