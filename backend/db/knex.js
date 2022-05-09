const config = require("../../knexfile");
const knex = require("knex")(config[process.env.DEV || "production"]);

module.exports = knex;
