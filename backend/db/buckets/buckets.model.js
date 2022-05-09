const knex = require("../knex");

const bucketsTable = "buckets";

module.exports = {
  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        bucketName: "bucketName",
        bucketDescription: "bucketDescription",
      })
      .from(bucketsTable)
      .limit(limit);
  },

  getById(id) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        bucketName: "bucketName",
        bucketDescription: "bucketDescription",
      })
      .from(bucketsTable)
      .where({ id: id })
      .first();
  },

  getByBucketName(name) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        bucketName: "bucketName",
        bucketDescription: "bucketDescription",
      })
      .from(bucketsTable)
      .where({ bucketName: name })
      .first();
  },

  create(bucket) {
    // validation

    return knex.insert(bucket).into("buckets").catch(console.error());
  },

  update(id, bucketUpdate) {
    return knex("buckets")
      .update(bucketUpdate)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  },
};
