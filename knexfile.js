require("dotenv").config({
  path: "./.env",
});
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./backend/db/migrations",
    },
    seeds: { directory: "./backend/db/seeds" },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./server/db/migrations",
    },
    seeds: { directory: "./server/db/seeds" },
  },
};
