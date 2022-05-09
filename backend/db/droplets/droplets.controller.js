const dropletsModel = require("./droplets.model");

module.exports = {
  async buckets(req, res) {
    const buckets = await dropletsModel.getAll();
    res.send(buckets);
  },

  async bucket(req, res) {
    const id = parseInt(req.params.id);
    const bucket = await dropletsModel.getById(id);
    res.send(bucket);
  },

  async saveNew(req, res) {
    const { userId, dropName, dropDescription, bucketId } = req.body;
    const bucketObj = {
      userId: userId,
      dropName: dropName,
      dropDescription: dropDescription,
      bucketId: bucketId,
    };

    await dropletsModel.create(bucketObj);

    const savedDroplet = await dropletsModel.getByDropletName(dropName);

    res.send(savedDroplet);
  },

  async update(req, res) {
    const {
      id,
      userId,
      dropName,
      dropDescription,
      dropStart,
      dropEnd,
      status,
      bucketId,
      totalTime,
    } = req.body;
    const bucketObj = {
      userId: userId,
      dropName: dropName,
      dropDescription: dropDescription,
      dropStart: dropStart,
      dropEnd: dropEnd,
      status: status,
      bucketId: bucketId,
      totalTime: totalTime,
    };

    await dropletsModel.update(id, bucketObj);

    const updatedDroplet = await dropletsModel.getById(id);

    res.send(updatedDroplet);
  },

  async status(req, res) {
    const { id, status } = req.body;
    const dropletObj = {
      status: status,
    };

    await dropletsModel.update(id, dropletObj);
    const updatedDroplet = await dropletsModel.getById(id);

    res.send(updatedDroplet);
  },
};
