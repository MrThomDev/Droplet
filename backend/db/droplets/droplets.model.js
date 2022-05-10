const knex = require("../knex");

const dropletsTable = "droplets";

module.exports = {
  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        dropName: "dropName",
        dropDescription: "dropDescription",
        dropStart: "dropStart",
        dropEnd: "dropEnd",
        status: "status",
        bucketId: "bucketId",
        totalTime: "totalTime",
      })
      .from(dropletsTable)
      .limit(limit);
  },

  getById(id) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        dropName: "dropName",
        dropDescription: "dropDescription",
        dropStart: "dropStart",
        dropEnd: "dropEnd",
        status: "status",
        bucketId: "bucketId",
        totalTime: "totalTime",
      })
      .from(dropletsTable)
      .where({ id: id })
      .first();
  },

  getAllUserDroplets(userId) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        dropName: "dropName",
        dropDescription: "dropDescription",
        dropStart: "dropStart",
        dropEnd: "dropEnd",
        status: "status",
        bucketId: "bucketId",
        totalTime: "totalTime",
      })
      .from(dropletsTable)
      .where({ userId: userId });
  },

  getByDropletName(name) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        dropName: "dropName",
        dropDescription: "dropDescription",
        dropStart: "dropStart",
        dropEnd: "dropEnd",
        status: "status",
        bucketId: "bucketId",
        totalTime: "totalTime",
      })
      .from(dropletsTable)
      .where({ dropName: name })
      .first();
  },

  create(droplet) {
    // validation

    return knex.insert(droplet).into("droplets").catch(console.error());
  },

  update(id, dropletUpdate) {
    return knex("users")
      .update(dropletUpdate)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  },

  updateStatus(id, status) {
    return knex("users")
      .update(status)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  },
};

// table.increments("id").primary();
//   table.integer("userId").notNullable();
//   table.foreign("userId").references("users.id");
//   table.string("dropName", 32).notNullable();
//   table
//     .string("dropDescription", 128)
//     .defaultTo("A droplet. Your description should go here.");
//   table.timestamp("dropStart").defaultTo(knex.fn.now());
//   table.dateTime("dropEnd");
//   table.string("status").defaultTo("active");
//   table.integer("bucketId");
