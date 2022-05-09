/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { id: 1, userId: "123FakeName@email.com", password: "123123" },
    { id: 2, userId: "msDevLady@mail.com", password: "bigboss" },
    {
      id: 3,
      userId: "mrpiano@gmail.com",
      password: "debussyRocks",
    },
  ]);
};
