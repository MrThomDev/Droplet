/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("droplets").del();
  await knex("droplets").insert([
    {
      id: 1,
      userId: 1,
      dropName: "Check Backlog",
      dropDescription: "Clear todos in backlog",
      dropStart: "2022-05-01 10:00",
      dropEnd: "2022-05-01 11:00",
      status: "closed",
      bucketId: 1,
      totalTime: 3600000,
    },
    {
      id: 2,
      userId: 1,
      dropName: "Client Face time",
      dropDescription:
        "Call, visit, email, or any other interaction with clients.",
      dropStart: "2022-05-01 12:00",
      dropEnd: "2022-05-01 14:00",
      status: "closed",
      bucketId: 1,
      totalTime: 7200000,
    },
    {
      id: 3,
      userId: 1,
      dropName: "Write schedule",
      dropDescription: "Look at projections and create schedule for week",
      dropStart: "2022-05-01 15:00",
      dropEnd: "2022-05-01 15:30",
      status: "closed",
      bucketId: 1,
      totalTime: 1800000,
    },
    {
      id: 4,
      userId: 1,
      dropName: "Wash dishes",
      dropDescription: "Clean up the sink and wash dishes",
      dropStart: "2022-05-01 17:00",
      dropEnd: "2022-05-01 17:45",
      status: "closed",
      bucketId: 2,
      totalTime: 2700000,
    },
    {
      id: 5,
      userId: 1,
      dropName: "Read: Name of the Wind",
      dropDescription: "Finish the novel",
      dropStart: "2022-05-01 21:00",
      dropEnd: "2022-05-01 22:00",
      status: "closed",
      bucketId: 3,
      totalTime: 3600000,
    },
  ]);
};
