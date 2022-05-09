/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("buckets").del();
  await knex("buckets").insert([
    {
      id: 1,
      userId: 1,
      bucketName: "work",
      bucketDescription: "Anything related to UX design",
    },
    {
      id: 2,
      userId: 1,
      bucketName: "chores",
      bucketDescription: "Around the house or errands to run",
    },
    {
      id: 3,
      userId: 1,
      bucketName: "relax",
      bucketDescription: "Things I would like to do more of",
    },
    {
      id: 4,
      userId: 2,
      bucketName: "Pre-work",
      bucketDescription: "My morning routine",
    },
    {
      id: 5,
      userId: 2,
      bucketName: "Work",
      bucketDescription: "Tasks that need my attention at work",
    },
    {
      id: 6,
      userId: 2,
      bucketName: "Home",
      bucketDescription: "Work related to maintaining home",
    },
    {
      id: 7,
      userId: 3,
      bucketName: "Focus",
      bucketDescription: "What I need to focus on",
    },
    {
      id: 8,
      userId: 3,
      bucketName: "Play",
      bucketDescription: "Learn to play the piano",
    },
    {
      id: 9,
      userId: 2,
      bucketName: "Relationships",
      bucketDescription: "Appropriate activities to build relationships",
    },
  ]);
};
