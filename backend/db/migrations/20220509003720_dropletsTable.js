/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("droplets", (table) => {
    table.increments("id").primary();
    table.integer("userId").notNullable();
    table.foreign("userId").references("users.id");
    table.string("dropName", 32).notNullable();
    table
      .string("dropDescription", 128)
      .defaultTo("A droplet. Your description should go here.");
    table.timestamp("dropStart").defaultTo(knex.fn.now());
    table.dateTime("dropEnd");
    table.string("status").defaultTo("active");
    table.integer("bucketId");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("droplets");
};
