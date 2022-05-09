const usersModel = require("./users.model");

module.exports = {
  async users(req, res) {
    const users = await usersModel.getAll();
    res.send(users);
  },

  async user(req, res) {
    const id = parseInt(req.params.id);
    const user = await usersModel.getById(id);
    res.send(user);
  },

  async save(req, res) {
    const { id, userId, password, startDate } = req.body;
    const userObj = {
      password: password,
      startDate: startDate,
    };
    id
      ? await usersModel.update(id, userObj)
      : await usersModel.create(userObj);

    const savedUser = await usersModel.getByUserName(userId);

    res.send(savedUser);
  },
};
