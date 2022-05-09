/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("droplets", (table) => {
    table.foreign("bucketId").references("buckets.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.alterTable("droplets", (table) => {
    table.dropForeign("bucketId", "bucketse.id");
    table.dropColumn("bucketId");
  });
};
