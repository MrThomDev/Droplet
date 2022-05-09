const knex = require("../knex");

const usersTable = "users";

module.exports = {
  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        startDate: "startDate",
      })
      .from(usersTable)
      .limit(limit);
  },

  getById(id) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        startDate: "startDate",
      })
      .from(usersTable)
      .where({ id: id })
      .first();
  },

  getByUserName(userName) {
    return knex
      .select({
        id: "id",
        userId: "userId",
        startDate: "startDate",
      })
      .from(usersTable)
      .where({ userId: userName })
      .first();
  },

  create(user) {
    // validation

    return knex.insert(user).into("users").catch(console.error());
  },

  update(id, userUpdate) {
    return knex("users")
      .update(userUpdate)
      .where("id", id)
      .returning("id")
      .then((id) => id[0].id)
      .catch(console.error());
  },
};
