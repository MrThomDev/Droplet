/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("buckets", (table) => {
    table.increments("id").primary();
    table.integer("userId").notNullable();
    table.foreign("userId").references("users.id");
    table.string("bucketName", 32).notNullable();
    table
      .string("bucketDescription", 128)
      .defaultTo("Your bucket description goes here.");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("buckets");
};
